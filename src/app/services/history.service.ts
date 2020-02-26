import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ThreatsSummary} from '../models/threats-summary';
import {Threat} from '../models/threat';
import {Time} from '@angular/common';
import {Timestamp} from 'rxjs/internal-compatibility';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  threatHistorySummary: ThreatsSummary[];
  threatsHistoryList: Threat[] = [];

  constructor(private httpClient: HttpClient) {

    this.threatHistorySummary = [
      {day: 1, numberOfThreats: 2},
      {day: 2, numberOfThreats: 9},
      {day: 3, numberOfThreats: 5},
      {day: 4, numberOfThreats: 1},
      {day: 5, numberOfThreats: 6},
      {day: 6, numberOfThreats: 8},
      {day: 7, numberOfThreats: 10},
      {day: 8, numberOfThreats: 3},

      {day: 9, numberOfThreats: 6},
      {day: 10, numberOfThreats: 6},
      {day: 11, numberOfThreats: 7},
      {day: 12, numberOfThreats: 10},
      {day: 13, numberOfThreats: 11},
      {day: 14, numberOfThreats: 5},
      {day: 15, numberOfThreats: 1},
      {day: 16, numberOfThreats: 6},
      {day: 17, numberOfThreats: 8},
      {day: 18, numberOfThreats: 10},
      {day: 19, numberOfThreats: 3},

      {day: 20, numberOfThreats: 20},
      {day: 21, numberOfThreats: 6},
      {day: 22, numberOfThreats: 7},

      {day: 23, numberOfThreats: 2},
      {day: 24, numberOfThreats: 6},
      {day: 25, numberOfThreats: 7},
      {day: 26, numberOfThreats: 1},
      {day: 27, numberOfThreats: 6},
      {day: 28, numberOfThreats: 7},
      {day: 29, numberOfThreats: 4},
      {day: 30, numberOfThreats: 6},
      {day: 31, numberOfThreats: 7},

    ];

    // @ts-ignore
    this.threatsHistoryList = [
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: 99.8020123444,
        eventDate: (new Date().getMonth() + '/' + new Date().getDay() + '/' + new Date().getFullYear()),
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: 99.8020123444,
        eventDate: (new Date().getMonth() + '/' + new Date().getDay() + '/' + new Date().getFullYear()),
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: 99.8020123444,
        eventDate: (new Date().getMonth() + '/' + new Date().getDay() + '/' + new Date().getFullYear()),
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: 99.8020123444,
        eventDate: (new Date().getMonth() + '/' + new Date().getDay() + '/' + new Date().getFullYear()),
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: 99.8020123444,
        eventDate: (new Date().getMonth() + '/' + new Date().getDay() + '/' + new Date().getFullYear()),
        timing: '10:34:14:PM'
      },
      {
        plantName: 'Chennai Sholinganallor',
        zone: 'Zone1',
        location: '5th  floor',
        confidence: 99.8020123444,
        eventDate: (new Date().getMonth() + '/' + new Date().getDay() + '/' + new Date().getFullYear()),
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

  }
