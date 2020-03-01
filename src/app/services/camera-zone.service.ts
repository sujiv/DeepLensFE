import { Injectable } from '@angular/core';
import { Zone } from '../models/zone';
import {CameraSummary} from '../models/camera-summary';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Plant} from '../models/plant';
import {Observable, of, Subject} from 'rxjs';
import {Topology} from '../models/topology';
import {Camera} from '../models/camera';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CameraZoneService {
  topologies: Topology[];
  plants: Plant[] = new Array();
  zones: Zone[] = new Array();
  cameras: Camera[] = new Array();
  baseUrl: any = 'http://localhost:8080/dl/';
  // baseUrl: any = 'https://sujiv-portfolio.herokuapp.com/dl/';
  pid: any = undefined;
  zid: any = undefined;
  cid: any = undefined;

  constructor(private httpClient: HttpClient) {
    this.loadTopologies();
  }

  loadTopologies() {
    if (this.topologies === undefined) {
      this.httpClient.get<Topology[]>(`${this.baseUrl}meta`, httpOptions).subscribe( tp => {
        this.topologies = tp;
        console.log('Loading ...' + tp[0].pName);
        const pset: Set<any> = new Set();
        const zset: Set<any> = new Set();
        const cset: Set<any> = new Set();
        // for (let i = 0; i < this.topologies.length; i++) {
        for (const topo of this.topologies) {
          // console.log(this.topologies[i].pName);
          // const topo = this.topologies[i];
          if (!pset.has(topo.pid)) {
            const p = new Plant();
            p.id = topo.pid;
            p.plantName = topo.pName;
            this.plants.push(p);
            pset.add(topo.pid);
          }
          if (!zset.has(topo.pid + 'z' + topo.zid)) {
            const z = new Zone();
            z.zoneId = topo.zid;
            z.zoneName = topo.zName;
            z.plantId = topo.pid;
            this.zones.push(z);
            zset.add(topo.pid + 'z' + topo.zid);
          }
          if (!cset.has(topo.pid + 'z' + topo.zid + 'c' + topo.cid)) {
            const c = new Camera();
            c.id = topo.cid;
            c.cameraName = topo.cLabel;
            c.zoneId = topo.zid;
            c.plantId = topo.pid;
            this.cameras.push(c);
            cset.add(topo.pid + 'z' + topo.zid + 'c' + topo.cid);
          }
        }
        console.log('metadata loaded');
      });
    }
  }

  getCameraSummary(zid: any): Observable<CameraSummary[]> {
    // return [
    //   {
    //     id: 1,
    //     zoneId: 'zone01',
    //     plantId: '01',
    //     threats: 0,
    //     timestamp: '20/02/2020 10.34.14PM',
    //     active: true,
    //     frame: null
    //   },
    //   {
    //     id: 2,
    //     zoneId: 'zone01',
    //     plantId: '01',
    //     threats: 1,
    //     timestamp: '20/02/2020 10.34.14PM',
    //     active: true,
    //     frame: null
    //   },
    //   {
    //     id: 3,
    //     zoneId: 'zone01',
    //     plantId: '01',
    //     threats: 3,
    //     timestamp: '20/02/2020 10.34.14PM',
    //     active: true,
    //     frame: null
    //   },
    //   {
    //     id: 4,
    //     zoneId: 'zone01',
    //     plantId: '01',
    //     threats: 0,
    //     timestamp: '20/02/2020 10.34.14PM',
    //     active: true,
    //     frame: null
    //   },
    //   {
    //     id: 5,
    //     zoneId: 'zone01',
    //     plantId: '01',
    //     threats: 0,
    //     timestamp: '20/02/2020 10.34.14PM',
    //     active: false,
    //     frame: null
    //   }
    // ];
    return this.httpClient.get<CameraSummary[]>(`${this.baseUrl}plants/${this.pid}/zones/${zid}/cameras`, httpOptions);
  }

  getThreatsOverview() {
    return [
      {
        plantId: '1',
        plantName: 'Chennai Vehicle & Engine Assembly Plant',
        zoneId: 'Zone 01',
        cameraId: 'camera 4',
        totalThreats: 2
      },
      {
        plantId: '2',
        plantName: 'Ford\'s Sanand Vehicle & Engine Assembly Plant',
        zoneId: 'Zone 05',
        cameraId: 'camera 3',
        totalThreats: 4
      },
      {
        plantId: '3',
        plantName: 'Silverton Assembly Plant',
        zoneId: 'Zone 08',
        cameraId: 'camera 4',
        totalThreats: 1
      },
      {
        plantId: '4',
        plantName: 'Struandale Engine Plant',
        zoneId: 'Zone 10',
        cameraId: 'camera 3',
        totalThreats: 5
      },
      {
        plantId: '3',
        plantName: 'Silverton Assembly Plant',
        zoneId: 'Zone 08',
        cameraId: 'camera 4',
        totalThreats: 1
      },
      {
        plantId: '4',
        plantName: 'Struandale Engine Plant',
        zoneId: 'Zone 10',
        cameraId: 'camera 3',
        totalThreats: 5
      }
    ];
  }

  getAllPlants(): Plant[] {
    // const plants: Plant[] = new Array();
    // this.loadTopologies();
    // while (this.topologies === undefined){}
    // console.log(this.topologies);

    return this.plants;
  }

  getPlants(): Observable<Plant[]> {
    return this.httpClient.get<Plant[]>(`${this.baseUrl}plants`, httpOptions);
    // return [
    //   {
    //     id: '01',
    //     plantName: 'Chennai Vehicle & Engine Assembly Plant'
    //   },
    //   {
    //     id: '02',
    //     plantName: 'Ford\'s Sanan Vehicle & Engine Assembly Plant'
    //   }
    // ];
  }

  // getZones(id: string): Observable<Zone[]> {
  //   // const zone1 = [
  //   //   {
  //   //     zoneId: '1',
  //   //     zoneName: 'Zone01',
  //   //     plantId: '01'
  //   //   },
  //   //   {
  //   //     zoneId: '2',
  //   //     zoneName: 'Zone02',
  //   //     plantId: '01'
  //   //   },
  //   //   {
  //   //     zoneId: '3',
  //   //     zoneName: 'Zone03',
  //   //     plantId: '01'
  //   //   }
  //   // ];
  //   //
  //   // const zone2 = [
  //   //   {
  //   //     zoneId: '1',
  //   //     zoneName: 'Zone A',
  //   //     plantId: '01'
  //   //   },
  //   //   {
  //   //     zoneId: '2',
  //   //     zoneName: 'Zone B',
  //   //     plantId: '01'
  //   //   }
  //   // ];
  //   //
  //   // switch (id) {
  //   //   case '01':
  //   //     return zone1;
  //   //   case '02':
  //   //     return zone2;
  //   // }
  //   if (id === undefined) {
  //     // id = '01';
  //     console.log('plant id req for zones search...');
  //   } else {
  //     return this.httpClient.get<Zone[]>(`${this.baseUrl}plants/${id}/zones`, httpOptions);
  //   }
  //   return null;
  // }

  getZones(pid: string) {
    const zarr: Zone[] = new Array();
    for (const z of this.zones) {
      if (z.plantId === pid) {
        zarr.push(z);
      }
    }
    return zarr;
  }

  setCurrentPlantId(pid: any) {
    if (pid !== null) {
      this.pid = pid;
    }
  }
  setCurrentZoneId(zid: any) {
    if (zid !== null) {
      this.zid = zid;
    }
  }
  setCurrentCameraId(cid: any) {
    if (cid !== null) {
      this.cid = cid;
    }
  }
}
