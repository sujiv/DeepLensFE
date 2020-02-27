import { Component, OnInit } from '@angular/core';
import {Threat} from '../../../../models/threat';
import {HistoryService} from '../../../../services/history.service';
import {MaterialModule} from '../../../../material.module';

@Component({
  selector: 'app-historical-threat-list',
  templateUrl: './historical-threat-list.component.html',
  styleUrls: ['./historical-threat-list.component.css']
})
export class HistoricalThreatListComponent implements OnInit {

  historicalThreatsList: Threat[] = [];
  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
     this.historicalThreatsList = this.historyService.getThreatHistoryList();
  }

}
