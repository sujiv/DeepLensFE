import {Component, OnInit} from '@angular/core';
import {Threat} from '../../../../models/threat';
import {HistoryService} from '../../../../services/history.service';
import {MaterialModule} from '../../../../material.module';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-historical-threat-list',
  templateUrl: './historical-threat-list.component.html',
  styleUrls: ['./historical-threat-list.component.css']
})
export class HistoricalThreatListComponent implements OnInit {
  myForm: FormGroup;
  historicalThreatsList: Threat[] = [];
  myDateCriteriaForSearchingThreats: string;
  StartDate1: Date = null;
  public enddate1: Date = null;
  pipe;
  now;
  mySmpleFormatStartDate: Date;
  mySmpleFormatEndDate: Date;
  myShortFormat: Date;

  constructor(private historyService: HistoryService, private  fb: FormBuilder) {

    this.pipe = new DatePipe('en-US');
    this.now = Date.now();
    this.myShortFormat = this.pipe.transform(this.now, 'MM/dd/yyyy');
    this.myShortFormat = this.pipe.transform(this.now, 'shortDate');
  }

  ngOnInit(): void {
    this.reactiveForm();
    this.historicalThreatsList = this.historyService.getThreatHistoryList();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      DateForSearch: ['', [Validators.required]],
    });
  }


  // filiterByDate($event:) {
  // }

  filiterByDate(e) {
    this.myDateCriteriaForSearchingThreats = new Date(e.target.value).toISOString().substring(0, 10);
    this.mySmpleFormatEndDate = this.pipe.transform(new Date(e.target.value), 'shortDate');
    this.myForm.get('DateForSearch').setValue(this.myDateCriteriaForSearchingThreats, {
      onlyself: true
    });
    console.log(this.mySmpleFormatEndDate);
    this.historicalThreatsList = this.historyService.getThreatHistoryListByDate(this.mySmpleFormatEndDate);
  }

  ViewAll() {
    this.historicalThreatsList = this.historyService.getThreatHistoryList();
  }

  dateForSearching(e: string) {
    this.pipe = new DatePipe('en-US');
    this.mySmpleFormatStartDate = this.pipe.transform(new Date(e), 'MM/dd/yyyy');

    // alert('this is my date    >' + this.mySmpleFormatStartDate)

    this.historicalThreatsList = this.historyService.getThreatHistoryListByDate(this.mySmpleFormatStartDate);
  }
}
