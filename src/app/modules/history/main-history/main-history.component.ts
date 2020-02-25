import { Component, OnInit } from '@angular/core';
import {FilterHistoryComponent} from './filter-history/filter-history.component';
import {HistoryBarChartComponent} from './history-bar-chart/history-bar-chart.component';
import {HistoricalThreatListComponent} from './historical-threat-list/historical-threat-list.component';
@Component({
  selector: 'app-main-history',
  templateUrl: './main-history.component.html',
  styleUrls: ['./main-history.component.css']
})
export class MainHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
