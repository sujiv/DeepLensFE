import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ThreatsSummary} from '../models/threats-summary';
import {Threat} from '../models/threat';
import {Time} from '@angular/common';
import {Timestamp} from 'rxjs/internal-compatibility';

import {DatePipe} from '@angular/common';
import {Camera} from '../models/camera';
import {Plant} from '../models/plant';
import {Zone} from '../models/zone';
import {ZonesModule} from '../modules/zones/zones.module';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
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
  constructor(private httpClient: HttpClient) {
    this.pipe = new DatePipe('en-US');
    this.now = Date.now();
    this.myShortFormat = this.pipe.transform(this.now, 'MM/dd/yyyy');
    this.myShortFormat = this.pipe.transform(this.now, 'shortDate');
    // Andding Plant Dummy Data
    this.plants = [{id: '01', plantName: 'Plant-I'}, {id: '02', plantName: 'Plant-2'}, {id: '03', plantName: 'Plant-3'}]

    this.zones = [{zoneId: 'z001', zoneName: 'zone-I', plantId: '01'}, {
      zoneId: 'z002',
      zoneName: 'zone-II',
      plantId: '02'
    }, , {zoneId: 'z003', zoneName: 'zone-3', plantId: '03'},]


    this.camers = [{id: 'c001', cameraName: 'Camera-I', zoneId: 'z001'}, {
      id: 'c002',
      cameraName: 'Camera-2',
      zoneId: 'z002'
    }, {id: 'c003', cameraName: 'Camera-3', zoneId: 'z003'}]

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

  getPlants(): Plant[] {
    return this.plants;
  }

//  returning all Zone from each plants
  getAllZones(): Zone[] {
    return this.zones;
  }


////////  return  list of zones give a plant ID

  getZonesByPlantId(plantId: string): Zone[] {
    return this.getAllZones().filter(res => res.plantId === plantId);
  }

  ///////  return Cameras in a given plant and region
  getCamerasByPlantAndZone(plantId, zoneId): Camera[] {
    return this.camers.filter(res => res.zoneId === zoneId);
  }
}
