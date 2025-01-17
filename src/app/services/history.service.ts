import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {ThreatsSummary} from '../models/threats-summary';
import {Threat} from '../models/threat';

import {DatePipe} from '@angular/common';
import {Camera} from '../models/camera';
import {Plant} from '../models/plant';
import {Zone} from '../models/zone';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  const;
  remoteUrl = 'https://sujiv-portfolio.herokuapp.com';

  // remoteUrl = 'http://localhost:8080';
  localpath = '/dl/history';

  threatHistorySummary: ThreatsSummary[];
  threatsHistoryList: Threat[] = [];
  pipe;
  now;
  mySmpleFormat;
  myShortFormat: Date;
  // filtredThreastByPlants: ThreatsSummary[];

  plants: Plant [] = [];
  zones: Zone[] = [];
  camers: Camera[] = [];
  // metatadata: Metadata[];
  private newDate: Date;
  filtredThreastByPlants: ThreatsSummary[];

  // myShortFormat
  constructor(private httpClient: HttpClient) {
    this.pipe = new DatePipe('en-US');
    this.now = Date.now();
    this.myShortFormat = this.pipe.transform(this.now, 'MM/dd/yyyy');
    // this.myShortFormat = this.pipe.transform(this.now, 'shortDate');
    // Andding Plant Dummy Data

    this.plants = [{id: '01', plantName: 'Silverton Assembly Plant'}, {
      id: '02',
      plantName: 'Chennai Vehicle & Engine Assembly Plant'
    }, {id: '03', plantName: 'Ford and Vehicle & Engine Assembly Plant'}]

    this.zones = [
      {zoneId: 'z001', zoneName: 'zone 1', plantId: '01'},
      {zoneId: 'z002', zoneName: 'Zone 1', plantId: '01'},
      {zoneId: 'z003', zoneName: 'zone 1', plantId: '01'},
      {
        zoneId: 'z001', zoneName: 'zone 1', plantId: '02'
      },
      {
        zoneId: 'z002', zoneName: 'zone 2', plantId: '02'
      },
      {
        zoneId: 'z003', zoneName: 'zone 2', plantId: '02'
      },
      {
        zoneId: 'z002', zoneName: 'zone 3', plantId: '02'
      },

      {zoneId: 'z001', zoneName: 'zone 1', plantId: '03'},

      {zoneId: 'z002', zoneName: 'zone 2', plantId: '03'},

      {zoneId: 'z003', zoneName: ' zone 3', plantId: '03'}

      ,]


    this.camers = [
      {id: 'c001', cameraName: 'Camera 1', zoneId: 'z001'},
      {id: 'c001', cameraName: 'Camera 2', zoneId: 'z001'},
      {id: 'c002', cameraName: 'Camera 3', zoneId: 'z001'},
      {id: 'c004', cameraName: 'Camera 1', zoneId: 'z002'},
      {id: 'c005', cameraName: 'Camera 1', zoneId: 'z003'}]

    this.threatHistorySummary = [
      {day: 1, numberOfThreats: 2, eventDate: this.myShortFormat, pid: '1', zid: '0', cid: '1'},
      {day: 2, numberOfThreats: 2, eventDate: this.myShortFormat, pid: '1', zid: '1', cid: '1'},
      {day: 3, numberOfThreats: 5, eventDate: this.myShortFormat, pid: '0', zid: '0', cid: '1'},
      {day: 4, numberOfThreats: 1, eventDate: this.myShortFormat, pid: '1', zid: '0', cid: '1'},
      {day: 5, numberOfThreats: 1, eventDate: this.myShortFormat, pid: '1', zid: '0', cid: '1'},
      {day: 6, numberOfThreats: 8, eventDate: this.myShortFormat, pid: '1', zid: '0', cid: '1'},
      {day: 7, numberOfThreats: 3, eventDate: this.myShortFormat, pid: '0', zid: '0', cid: '1'},
      {day: 8, numberOfThreats: 3, eventDate: this.myShortFormat, pid: '1', zid: '1', cid: '1'},

      {day: 9, numberOfThreats: 6, eventDate: this.myShortFormat, pid: '2', zid: '1', cid: '1'},
      {day: 10, numberOfThreats: 6, eventDate: this.myShortFormat, pid: '2', zid: '1', cid: '1'},
      {day: 11, numberOfThreats: 7, eventDate: this.myShortFormat, pid: '2', zid: '1', cid: '1'},
      {day: 12, numberOfThreats: 3, eventDate: this.myShortFormat, pid: '2', zid: '1', cid: '1'},
      {day: 13, numberOfThreats: 6, eventDate: this.myShortFormat, pid: '2', zid: '1', cid: '2'},
      {day: 14, numberOfThreats: 5, eventDate: this.myShortFormat, pid: '2', zid: '1', cid: '2'},
      {day: 15, numberOfThreats: 1, eventDate: this.myShortFormat, pid: '2', zid: '1', cid: '2'},
      {day: 16, numberOfThreats: 6, eventDate: this.myShortFormat, pid: '2', zid: '1', cid: '2'},
      {day: 17, numberOfThreats: 8, eventDate: this.myShortFormat, pid: '2', zid: '1', cid: '2'},
      {day: 18, numberOfThreats: 1, eventDate: this.myShortFormat, pid: '2', zid: '2', cid: '2'},
      {day: 19, eventDate: this.myShortFormat, numberOfThreats: 3, pid: '2', zid: '2', cid: '2'},

      {day: 20, eventDate: this.myShortFormat, numberOfThreats: 5, pid: '2', zid: '3', cid: '3'},
      {day: 21, eventDate: this.myShortFormat, numberOfThreats: 3, pid: '2', zid: '3', cid: '2'},
      {day: 22, eventDate: this.myShortFormat, numberOfThreats: 7, pid: '2', zid: '3', cid: '2'},

      {day: 23, eventDate: this.myShortFormat, numberOfThreats: 2, pid: '3', zid: '2', cid: '2'},
      {day: 24, eventDate: this.myShortFormat, numberOfThreats: 2, pid: '3', zid: '2', cid: '2'},
      {day: 25, eventDate: this.myShortFormat, numberOfThreats: 7, pid: '3', zid: '2', cid: '2'},
      {day: 26, eventDate: this.myShortFormat, numberOfThreats: 1, pid: '3', zid: '1', cid: '2'},
      {day: 27, eventDate: this.myShortFormat, numberOfThreats: 6, pid: '0', zid: '2', cid: '2'},
      {day: 28, eventDate: this.myShortFormat, numberOfThreats: 1, pid: '3', zid: '1', cid: '2'},
      {day: 29, eventDate: this.myShortFormat, numberOfThreats: 4, pid: '3', zid: '1', cid: '2'},
      {day: 30, eventDate: this.myShortFormat, numberOfThreats: 4, pid: '3', zid: '1', cid: '2'},
      {day: 31, eventDate: this.myShortFormat, numberOfThreats: 6, pid: '3', zid: '1', cid: '2'},
///// month two
      {day: 1, eventDate: this.myShortFormat, numberOfThreats: 2, pid: '3', zid: '2', cid: '2'},
      {day: 2, eventDate: this.myShortFormat, numberOfThreats: 1, pid: '3', zid: '2', cid: '2'},
      {day: 3, eventDate: this.myShortFormat, numberOfThreats: 3, pid: '3', zid: '2', cid: '2'},
      {day: 4, eventDate: this.myShortFormat, numberOfThreats: 0, pid: '3', zid: '2', cid: '2'},
      {day: 5, eventDate: this.myShortFormat, numberOfThreats: 1, pid: '3', zid: '1', cid: '1'},
      {day: 6, eventDate: this.myShortFormat, numberOfThreats: 2, pid: '3', zid: '2', cid: '1'},
      {day: 7, eventDate: this.mySmpleFormat, numberOfThreats: 3, pid: '3', zid: '2', cid: '1'},
      {day: 8, eventDate: this.myShortFormat, numberOfThreats: 5, pid: '3', zid: '2', cid: '1'},

      {day: 9, eventDate: this.myShortFormat, numberOfThreats: 2, pid: '3', zid: '3', cid: '3'},
      {day: 10, eventDate: this.myShortFormat, numberOfThreats: 3, pid: '3', zid: '3', cid: '3'},
      {day: 11, eventDate: this.myShortFormat, numberOfThreats: 2, pid: '3', zid: '3', cid: '3'},
      {day: 12, eventDate: this.myShortFormat, numberOfThreats: 6, pid: '3', zid: '3', cid: '3'},
      {day: 13, eventDate: this.myShortFormat, numberOfThreats: 1, pid: '2', zid: '2', cid: '2'},
      {day: 14, eventDate: this.myShortFormat, numberOfThreats: 2, pid: '2', zid: '2', cid: '2'},
      {day: 15, eventDate: this.mySmpleFormat, numberOfThreats: 2, pid: '2', zid: '2', cid: '2'},
      {day: 16, eventDate: this.myShortFormat, numberOfThreats: 5, pid: '2', zid: '2', cid: '2'},

      {day: 17, eventDate: this.myShortFormat, numberOfThreats: 4, pid: '2', zid: '2', cid: '2'},
      {day: 18, eventDate: this.myShortFormat, numberOfThreats: 0, pid: '2', zid: '2', cid: '2'},
      {day: 19, eventDate: this.myShortFormat, numberOfThreats: 2, pid: '2', zid: '2', cid: '2'},
      {day: 20, eventDate: this.myShortFormat, numberOfThreats: 1, pid: '0', zid: '2', cid: '2'},
      {day: 21, eventDate: this.myShortFormat, numberOfThreats: 0, pid: '2', zid: '2', cid: '2'},
      {day: 22, eventDate: this.myShortFormat, numberOfThreats: 8, pid: '2', zid: '2', cid: '2'},
      {day: 23, eventDate: this.mySmpleFormat, numberOfThreats: 3, pid: '2', zid: '2', cid: '2'},
      {day: 24, eventDate: this.myShortFormat, numberOfThreats: 2, pid: '2', zid: '2', cid: '2'},

      {day: 25, eventDate: this.myShortFormat, numberOfThreats: 4, pid: '2', zid: '3', cid: '2'},
      {day: 26, eventDate: this.myShortFormat, numberOfThreats: 2, pid: '2', zid: '3', cid: '2'},
      {day: 27, eventDate: this.myShortFormat, numberOfThreats: 7, pid: '0', zid: '3', cid: '2'},
      {day: 28, eventDate: this.myShortFormat, numberOfThreats: 0, pid: '2', zid: '3', cid: '2'},
      {day: 29, eventDate: this.myShortFormat, numberOfThreats: 0, pid: '2', zid: '3', cid: '2'},
      {day: 30, eventDate: this.myShortFormat, numberOfThreats: 2, pid: '2', zid: '3', cid: '2'},
      {day: 31, eventDate: this.mySmpleFormat, numberOfThreats: 6, pid: '2', zid: '3', cid: '2'},
    ];

    // @ts-ignore
    this.threatsHistoryList = [
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: '99.8020123444',
        // eventDate: (new Date().getFullYear() + '/' + new Date().getMonth() + '/' + new Date().getDay() + '/'),
        eventDate: this.myShortFormat,
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: '99.8020123444',
        eventDate: this.myShortFormat,
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: '99.8020123444',
        eventDate: this.myShortFormat,
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: '99.8020123444',
        eventDate: this.myShortFormat,
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: '99.8020123444',
        eventDate: this.myShortFormat,
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: '99.8020123444',
        eventDate: this.myShortFormat,
        timing: '10:34:14:PM'
      }
    ];
  }

  getThreatsSummary(): ThreatsSummary[] {
    return this.threatHistorySummary;
  }

  getThreatHistoryList(): Threat[] {
    return this.threatsHistoryList;

  }

  // ========================////

  // getThreatHistoryList_Rest(): Threat[] {
  //   if (this.threatsHistoryList === undefined) {
  //     this.httpClient.get<Metadata[]>(this.remoteUrl + this.localpath, httpOptions)
  //       .subscribe(tp => {
  //         this.metatadata = tp;
  //         for (const meta of this.metatadata) {
  //           const t = new Threat();
  //           t.plantName = meta.pName;
  //           t.zone = meta.zName;
  //           t.confidence = meta.Confidence;
  //           t.location = meta.location;
  //
  //           const dateString = '1968-11-16T00:00:00'
  //           // @ts-ignore
  //           const newDate: Date = new Date(meta.TimeStamp);
  //           this.myShortFormat = this.pipe.transform(this.newDate, 'MM/dd/yyyy');
  //           this.myShortFormat = this.pipe.transform(this.newDate, 'shortDate');
  //           t.eventDate = this.mySmpleFormat;
  //           console.log(t.eventDate);
  //           t.timing = meta.TimeStamp.substring(10);
  //           this.threatsHistoryList.push(t);
  //         }
  //       });
  //   }
  //   return this.threatsHistoryList;
  // }

//////  return list of Threat filter by a given Date
  getThreatHistoryListByDate(searchDate: Date): Threat[] {
    alert('this is from service class' + searchDate);
    return this.getThreatHistoryList().filter(res => res.eventDate === searchDate);
  }

  getThreatsSummaryByStartDateAndEndDate(startDate: Date, endDate: Date): ThreatsSummary[] {
    console.log('======my date data at Service class ' + startDate + '    ' + endDate);
    const myfilteredData: ThreatsSummary[] = [];
    let k = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.getThreatsSummary().length; i++) {
      // console.log(' event data in side a loop =====>' + this.getThreatsSummary()[i].eventDate +
      //   ' start data  :' + startDate + ' end data : ' + endDat);
      if ((this.getThreatsSummary()[i].eventDate >= startDate && this.getThreatsSummary()[i].eventDate <= endDate)) {
        myfilteredData[k] = this.getThreatsSummary()[i];
        console.log(' my filtred date ' + myfilteredData[k]);
        k++;
      }
    }
    console.log('my filttred  Data ....>' + myfilteredData);
    return myfilteredData;

  }


//////  return  list of plants

  getPlants() {
    return this.plants;
    // this.httpClient.get<Plant[]>(this.remoteUrl + this.localpath);
    // return this.httpClient.get<Plant[]>(this.remoteUrl + this.localpath, httpOptions);
// .subscribe(res:Plant[]=> this.plants = res);
  }


//  returning all Zone from each plants
  getAllZones()
    :
    Zone[] {
    return this.zones;
  }

////////  return  list of zones give a plant ID

  getZonesByPlantId(plantId: string) {
    // Observable<Zone[]> {
    // // return this.getAllZones().filter(res => res.plantId === plantId);
    // return this.httpClient.get<Zone[]>(this.remoteUrl + this.localpath + '/' + plantId + '/zones');
    return this.getAllZones().filter(res => res.plantId === plantId);

  }

///////  return Cameras in a given plant and region
  getCamerasByPlantAndZone(plantId, zoneId)
    :
    Camera[] {
    return this.camers.filter(res => res.zoneId === zoneId);
  }

  // getThreatsSummaryByPlant(plantId: string): ThreatsSummary[] {
  //   let k = 0;
  //   // tslint:disable-next-line:prefer-const
  //   let tem: ThreatsSummary[];
  //   for (let i = 0; i < this.getThreatsSummary().length; i++) {
  //     if (this.threatHistorySummary[i].pid === plantId) {
  //       tem.push(this.getThreatsSummary()[i]);
  //       console.log('----From array-- from Temp--------- ' + tem[tem.length - 1]);
  //       k++;
  //     } else {
  //     }
  //   }
  //   return this.filtredThreastByPlants;
  //
  // }

  getThreatsSummaryByPlant(plantId: string): ThreatsSummary[] {
    const threatsByPlant: ThreatsSummary[] = new Array();
    for (const tbp of this.getThreatsSummary()) {
      if (tbp.pid === plantId) {
        threatsByPlant.push(tbp);
      }
    }
    return threatsByPlant;
  }

  getThreatsSummaryByPlantAndZone(plantId: string, zoneId: string): ThreatsSummary[] {
    const threatsByPlantAndZone: ThreatsSummary[] = new Array();
    for (const tbpz of this.getThreatsSummary()) {
      if ((tbpz.pid === plantId) && (tbpz.zid === zoneId)) {
        threatsByPlantAndZone.push(tbpz);
      }
    }
    return threatsByPlantAndZone;
  }

  getThreatsSummaryBy_Plant_AndZone_And_Camera(plantId, zoneId, cameraId): ThreatsSummary[] {
    const threatsByPlantAndZoneAndCamera: ThreatsSummary[] = new Array();
    for (const t of this.getThreatsSummary()) {
      if ((t.pid === plantId) && (t.zid === zoneId) && (cameraId === t.cid)) {
        threatsByPlantAndZoneAndCamera.push(t);
      }
    }
    console.log( ' this is from service calss============ ' + threatsByPlantAndZoneAndCamera)
    return threatsByPlantAndZoneAndCamera;
  }

}
