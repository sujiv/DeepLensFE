import {Component, Input, OnInit} from '@angular/core';
import {ChartOptions, ChartType, ChartDataSets, ChartColor} from 'chart.js';
import {Label} from 'ng2-charts';
import {HistoryService} from '../../../../services/history.service';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ThreatsSummary} from '../../../../models/threats-summary';
import {Threat} from '../../../../models/threat';
import {DatePipe} from '@angular/common';
import {Plant} from '../../../../models/plant';
import {Zone} from '../../../../models/zone';
import {Camera} from '../../../../models/camera';


@Component({
  selector: 'app-history-bar-chart',
  templateUrl: './history-bar-chart.component.html',
  styleUrls: ['./history-bar-chart.component.css']
})
export class HistoryBarChartComponent implements OnInit {
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
  isInint: boolean; // used for  tracking if the initailzation method  was call  not
  plants: Plant[] = [];
  zones: Zone[] = [];
  cameras: Camera[] = [];
  plantId: string;
  zoneId: string;

  constructor(public fb: FormBuilder, private historyService: HistoryService) {
    this.pipe = new DatePipe('en-US');
    this.now = Date.now();
    this.myShortFormat = this.pipe.transform(this.now, 'MM/dd/yyyy');
    this.myShortFormat = this.pipe.transform(this.now, 'shortDate');
    this.isInint = false;
    // this.ngOnInit();
    // this.populateChart();

  }

  ////////////// using Service////////////
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[];
  // public barCharColor: Char;

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      startDate: ['', [Validators.required]],
      plantName: [''],
      ZoneName: [''],
      CameraName: [''],
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
    this.zoneId = 'z001';
    this.cameras = this.historyService.getCamerasByPlantAndZone(this.plantId, this.zoneId);
    this.reactiveForm();
    this.populateChart();
    // this.isInint = true;
  }

  filterThreatsHistoryByDate() {
    this.populateChart();
  }

  populateChart() {

    let myJsonData: ThreatsSummary[];

    if (!this.isInint) {
      myJsonData = this.historyService.getThreatsSummary();
      this.isInint = true;
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

// / Choose plant using select dropdown
  changePlant(e) {
    // this.plantName.setValue(e.target.value, {
    //   onlySelf: true
    // });

  }

  // used to  select a  given zone
  changeZone($event: Event) {
  }

///////////// Camer selction method//////////////////
  changeCamera($event: Event) {

  }
}



