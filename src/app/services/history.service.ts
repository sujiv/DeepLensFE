import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {ThreatsSummary} from '../models/threats-summary';
import {Threat} from '../models/threat';
import {Time} from '@angular/common';
import {Timestamp} from 'rxjs/internal-compatibility';

import {DatePipe} from '@angular/common';
import {Camera} from '../models/camera';
import {Plant} from '../models/plant';
import {Zone} from '../models/zone';
import {ZonesModule} from '../modules/zones/zones.module';
import {Observable} from 'rxjs';
import {Metadata} from '../models/metadata';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  const;
  // remoteUrl = 'https://sujiv-portfolio.herokuapp.com';

  remoteUrl = 'http://192.168.0.10:8080';
  localpath = '/dl/plants';

  threatHistorySummary: ThreatsSummary[];
  threatsHistoryList: Threat[] = [];
  pipe;
  now;
  mySmpleFormat;
  myShortFormat: Date;

  plants: Plant [] = [];
  zones: Zone[] = [];
  camers: Camera[] = [];

  // = this.pipe.transform(this.now, 'short');
  private metatadata: Metadata[];
  constructor(private httpClient: HttpClient) {
    this.pipe = new DatePipe('en-US');
    this.now = Date.now();
    this.myShortFormat = this.pipe.transform(this.now, 'MM/dd/yyyy');
    this.myShortFormat = this.pipe.transform(this.now, 'shortDate');
    // Andding Plant Dummy Data

    this.plants = [{id: '01', plantName: 'Plant-I'}, {id: '02', plantName: 'Plant-2'}, {id: '03', plantName: 'Plant-3'}];

    this.zones = [
      {zoneId: 'z001', zoneName: 'p1 and z00I', plantId: '01'},
      {zoneId: 'z002', zoneName: 'p1 and z002', plantId: '01'},
      {zoneId: 'z003', zoneName: 'p1 and z003', plantId: '01'},
      {
        zoneId: 'z001', zoneName: 'p2  and z001', plantId: '02'
      },
      {
        zoneId: 'z002', zoneName: 'p2 and z002', plantId: '02'
      },
      {
        zoneId: 'z003', zoneName: 'zone-2', plantId: '02'
      },
      {
        zoneId: 'z002', zoneName: 'zone-3', plantId: '02'
      },

      {zoneId: 'z001', zoneName: ' p3 and z001', plantId: '03'},

      {zoneId: 'z002', zoneName: 'p3 and z002', plantId: '03'},

      {zoneId: 'z003', zoneName: ' p3 and z003', plantId: '03'}

      ];

    this.camers = [
      {id: 'c001', cameraName: 'P1 and z001 and c001', zoneId: 'z001'},
      {id: 'c001', cameraName: 'p1 and  z001 and c001', zoneId: 'z001'},
      {id: 'c002', cameraName: 'p1 and  z002 and c002', zoneId: 'z001'},
      {id: 'c004', cameraName: 'P2 and z002 and c004', zoneId: 'z001'},
      {id: 'c005', cameraName: 'p3 and z001 an c005', zoneId: 'z001'}
      ];

    this.threatHistorySummary = [
      {day: 1, eventDate: this.myShortFormat, numberOfThreats: 2},
      {day: 2, eventDate: this.myShortFormat, numberOfThreats: 9},
      {day: 3, eventDate: this.myShortFormat, numberOfThreats: 5},
      {day: 4, eventDate: this.myShortFormat, numberOfThreats: 1},
      {day: 5, eventDate: this.myShortFormat, numberOfThreats: 6},
      {day: 6, eventDate: this.myShortFormat, numberOfThreats: 8},
      {day: 7, eventDate: this.mySmpleFormat, numberOfThreats: 10},
      {day: 8, eventDate: this.myShortFormat, numberOfThreats: 3},

      {day: 9, eventDate: this.myShortFormat, numberOfThreats: 6},
      {day: 10, eventDate: this.myShortFormat, numberOfThreats: 6},
      {day: 11, eventDate: this.myShortFormat, numberOfThreats: 7},
      {day: 12, eventDate: this.myShortFormat, numberOfThreats: 10},
      {day: 13, eventDate: this.myShortFormat, numberOfThreats: 11},
      {day: 14, eventDate: this.myShortFormat, numberOfThreats: 5},
      {day: 15, eventDate: this.myShortFormat, numberOfThreats: 1},
      {day: 16, eventDate: this.myShortFormat, numberOfThreats: 6},
      {day: 17, eventDate: this.myShortFormat, numberOfThreats: 8},
      {day: 18, eventDate: this.myShortFormat, numberOfThreats: 10},
      {day: 19, eventDate: this.myShortFormat, numberOfThreats: 3},

      {day: 20, eventDate: this.myShortFormat, numberOfThreats: 20},
      {day: 21, eventDate: this.myShortFormat, numberOfThreats: 6},
      {day: 22, eventDate: this.myShortFormat, numberOfThreats: 7},

      {day: 23, eventDate: this.myShortFormat, numberOfThreats: 2},
      {day: 24, eventDate: this.myShortFormat, numberOfThreats: 6},
      {day: 25, eventDate: this.myShortFormat, numberOfThreats: 7},
      {day: 26, eventDate: this.myShortFormat, numberOfThreats: 1},
      {day: 27, eventDate: this.myShortFormat, numberOfThreats: 6},
      {day: 28, eventDate: this.myShortFormat, numberOfThreats: 7},
      {day: 29, eventDate: this.myShortFormat, numberOfThreats: 4},
      {day: 30, eventDate: this.myShortFormat, numberOfThreats: 6},
      {day: 31, eventDate: this.myShortFormat, numberOfThreats: 7},

    ];

    // @ts-ignore
    this.threatsHistoryList = [
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: 99.8020123444,
        // eventDate: (new Date().getFullYear() + '/' + new Date().getMonth() + '/' + new Date().getDay() + '/'),
        eventDate: this.myShortFormat,
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: 99.8020123444,
        eventDate: this.myShortFormat,
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: 99.8020123444,
        eventDate: this.myShortFormat,
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: 99.8020123444,
        eventDate: this.myShortFormat,
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: 99.8020123444,
        eventDate: this.myShortFormat,
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: 99.8020123444,
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

  //////  return list of Threat filter by a given Date
  getThreatHistoryListByDate(searchDate: Date): Threat[] {
    return this.getThreatHistoryList().filter(res => res.eventDate === searchDate);
  }

  getThreatsSummaryByStartDateAndEndDate(startDate, endDate): ThreatsSummary[] {
    console.log('======my date data at Service class ' + startDate + '    ' + endDate);
    const myfilteredData: ThreatsSummary[] = [];
    let k = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.getThreatsSummary().length; i++) {
      console.log(' event data in side a loop =====>' + this.getThreatsSummary()[i].eventDate +
        ' start data  :' + startDate + ' end data : ' + endDate
      )
      ;
      if ((this.getThreatsSummary()[i].eventDate >= startDate && this.getThreatsSummary()[i].eventDate <= endDate)) {
        myfilteredData[k] = this.getThreatsSummary()[i];
        k++;
      }
    }
    console.log('my filttred  Data ....>' + myfilteredData);
    return myfilteredData;

  }


////////  return  list of plants

  getPlants(): Observable<Plant[]> {
    console.log(this.httpClient.get<Plant[]>(this.remoteUrl + this.localpath));
    return this.httpClient.get<Plant[]>(this.remoteUrl + this.localpath, httpOptions);
    // .subscribe(res:Plant[]=> this.plants = res);
  }


//  returning all Zone from each plants
  getAllZones(): Zone[] {
    return this.zones;
  }

////////  return  list of zones give a plant ID

  getZonesByPlantId(plantId: string): Observable<Zone[]> {
    // return this.getAllZones().filter(res => res.plantId === plantId);
    return this.httpClient.get<Zone[]>(this.remoteUrl + this.localpath + '/' + plantId + '/zones');

  }

///////  return Cameras in a given plant and region
  getCamerasByPlantAndZone(plantId, zoneId): Camera[] {
    return this.camers.filter(res => res.zoneId === zoneId);
  }

  // ========================////

  getThreatHistoryList_Rest(): Threat[] {
    if (this.threatsHistoryList === undefined) {
      this.httpClient.get<Metadata[]>(this.remoteUrl + this.localpath, httpOptions)
        .subscribe(tp => {
          this.metatadata = tp;
          for (const meta of this.metatadata) {
            const t = new Threat();
            t.plantName = meta.pName;
            t.zone = meta.zName;
            t.confidence = meta.Confidence;
            t.location = meta.location;

            t.eventDate = new Date(meta.TimeStamp);
            t.timing = meta.TimeStamp.substring(10);
            this.threatsHistoryList.push(t);
          }
        });
    }
    return this.threatsHistoryList;
  }
}
