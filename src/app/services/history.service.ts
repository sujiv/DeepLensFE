import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ThreatsSummary} from '../models/threats-summary';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  threatHistory: ThreatsSummary[];
  constructor(private httpClient: HttpClient) {

    this.threatHistory = [
      {day: 1, numberOfThreats: 10},
      {day: 2, numberOfThreats: 15},
      {day: 3, numberOfThreats: 5},
      {day: 4, numberOfThreats: 1},
      {day: 5, numberOfThreats: 6},
      {day: 6, numberOfThreats: 8},
      {day: 7, numberOfThreats: 10},
      {day: 8, numberOfThreats: 3},

      {day: 9, numberOfThreats: 20},
      {day: 10, numberOfThreats: 6},
      {day: 11, numberOfThreats: 7},
    ];

  }

  getThreatsSummary(): ThreatsSummary[] {
    return this.threatHistory;

  }


}
