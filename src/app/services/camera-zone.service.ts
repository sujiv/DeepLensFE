import { Injectable } from '@angular/core';
import { Zone } from '../models/zone';
import {CameraSummary} from '../models/camera-summary';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Plant} from '../models/plant';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CameraZoneService {
  baseUrl: any = 'https://sujiv-portfolio.herokuapp.com/dl/';
  pid: any = undefined;
  zid: any = undefined;
  cid: any = undefined;

  constructor(private httpClient: HttpClient) { }

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

  getZones(id: string): Observable<Zone[]> {
    // const zone1 = [
    //   {
    //     zoneId: '1',
    //     zoneName: 'Zone01',
    //     plantId: '01'
    //   },
    //   {
    //     zoneId: '2',
    //     zoneName: 'Zone02',
    //     plantId: '01'
    //   },
    //   {
    //     zoneId: '3',
    //     zoneName: 'Zone03',
    //     plantId: '01'
    //   }
    // ];
    //
    // const zone2 = [
    //   {
    //     zoneId: '1',
    //     zoneName: 'Zone A',
    //     plantId: '01'
    //   },
    //   {
    //     zoneId: '2',
    //     zoneName: 'Zone B',
    //     plantId: '01'
    //   }
    // ];
    //
    // switch (id) {
    //   case '01':
    //     return zone1;
    //   case '02':
    //     return zone2;
    // }
    if (id === undefined){
      id = '01';
    }
    return this.httpClient.get<Zone[]>(`${this.baseUrl}plants/${id}/zones`, httpOptions);
    // return null;
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
