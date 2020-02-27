import {Component, Input, OnInit} from '@angular/core';
import {ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {HistoryService} from '../../../../services/history.service';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ThreatsSummary} from '../../../../models/threats-summary';
import {Threat} from '../../../../models/threat';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-history-bar-chart',
  templateUrl: './history-bar-chart.component.html',
  styleUrls: ['./history-bar-chart.component.css']
})
export class HistoryBarChartComponent implements OnInit {
  // @Input() startDate: Date;
  // @Input() endDate: Date;
  // @Input() mySmpleFormatStartDate;
  // @Input() mySmpleFormatEndDate;

  myDate: Date = new Date();
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myStartDate: string;
  myEndDate: string;
  myForm: FormGroup;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  pipe;
  now;
  mySmpleFormatStartDate: Date;
  mySmpleFormatEndDate: Date;
  myShortFormat: Date;
  isInint = false; // used for  tracking if the initailzation method  was call  not
  plants: any[] = [];
  zones: any[] = [];
  plantId: string;

  constructor(public fb: FormBuilder, private historyService: HistoryService) {
    this.pipe = new DatePipe('en-US');
    this.now = Date.now();
    this.myShortFormat = this.pipe.transform(this.now, 'MM/dd/yyyy');
    this.myShortFormat = this.pipe.transform(this.now, 'shortDate');

  }

  // // tslint:disable-next-line:use-lifecycle-interface
  // ngOnInit(): void {
  //   this.reactiveForm();
  // }


  ////////////// using Service////////////

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[];
  // = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[];
  //   = [
  //   // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ]
  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      startDate: ['', [Validators.required]],
      plants: [''],
      zones: [''],
    });
  }


  /* Date */
  startDate(e) {
    this.myStartDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.mySmpleFormatStartDate = this.pipe.transform(new Date(e.target.value), 'shortDate');
    // this.myStartDate =
    this.myForm.get('startDate').setValue(this.myStartDate, {
      onlyself: true
    });
    console.log(this.myShortFormat);
  }

  /* Handle form errors in Angular 8 */
  // public errorHandling = (control: string, error: string) => {
  //   return this.myForm.controls[control].hasError(error);
  // }

  submitForm() {
    console.log(this.myForm.value);
  }

  endDate(e) {
    this.myEndDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.mySmpleFormatEndDate = this.pipe.transform(new Date(e.target.value), 'shortDate');
    this.myForm.get('startDate').setValue(this.myEndDate, {
      onlyself: true
    });
    console.log(this.mySmpleFormatEndDate);

  }

  ngOnInit() {
    // tslint:disable-next-line:label-position
    this.plants = this.historyService.getPlants();
    this.plantId = '01'
    this.zones = this.historyService.getZonesByPlantId(this.plantId);
    this.reactiveForm();
    this.populateChart();
    this.isInint = true;
  }

  filterThreatsHistoryByDate() {
    this.populateChart();
  }

  populateChart() {

    let myJsonData: ThreatsSummary[];

    if (!this.isInint) {
      myJsonData = this.historyService.getThreatsSummary();
    } else {
      myJsonData = this.historyService.getThreatsSummaryByStartDateAndEndDate(this.mySmpleFormatStartDate, this.mySmpleFormatEndDate);
    }
    console.log(myJsonData);
    const myLabels: any[] = [];
    const myData: any[] = [];
    for (let i = 0; i < myJsonData.length; i++) {

      myLabels[i] = myJsonData[i].day;

      myData[i] = myJsonData[i].numberOfThreats;
    }
    this.barChartLabels = myLabels;
    // @ts-ignore
    this.barChartData = [{data: myData, label: 'Number of Threats'}];
    console.log(' my start date' + this.mySmpleFormatStartDate + 'my End Date ' + this.mySmpleFormatEndDate);


  }
}



