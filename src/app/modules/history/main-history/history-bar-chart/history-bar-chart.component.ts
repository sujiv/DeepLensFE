import {Component, Input, OnInit} from '@angular/core';
import {ChartOptions, ChartType, ChartDataSets, ChartColor, ChartScales} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {HistoryService} from '../../../../services/history.service';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ThreatsSummary} from '../../../../models/threats-summary';
import {DatePipe} from '@angular/common';
import {Plant} from '../../../../models/plant';
import {Zone} from '../../../../models/zone';
import {Camera} from '../../../../models/camera';
import {CameraZoneService} from '../../../../services/camera-zone.service';


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
  @Input()plantId: string;
  @Input()zoneId: string;
  @Input()cameraId: string;
  plantSelected;
  zoneSelected;

  constructor(public fb: FormBuilder, private historyService: HistoryService, private cameraZS: CameraZoneService) {
    this.pipe = new DatePipe('en-US');
    this.now = Date.now();
    this.myShortFormat = this.pipe.transform(this.now, 'MM/dd/yyyy');
    this.myShortFormat = this.pipe.transform(this.now, 'shortDate');
    this.isInint = false;
    this.plantSelected = false;
    this.zoneSelected = false;
    // this.ngOnInit();
//     this.populateChart();
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
  public barcharColor: Color[] = [
    {
      borderColor: 'black',
      // backgroundColor: 'rgba(255,255,0,0.28)',
      backgroundColor: 'rgba(0,0, 255,0.8)',
    },
  ];
  public options: ChartOptions = {
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  };


  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      plantName: [''],
      ZoneName: [''],
      CameraName: [''],
    });
  }

  /* Date */
  changeStartDate(e: string) {
    this.myStartDate = e;
    this.mySmpleFormatStartDate = this.pipe.transform(new Date(e), 'shortDate')
    // this.myForm.get('startDate').setValue(this.myStartDate, {
    //   onlyself: true
    // });
    console.log(this.myShortFormat);
  }

  /* Handle form errors in Angular 8 */
  // public errorHandling = (control: string, error: string) => {
  //   return this.myForm.controls[control].hasError(error);
  // }

  submitForm() {
    console.log(this.myForm.value);
  }

  changeEndDate(e: string) {
    this.myEndDate = e;
    this.mySmpleFormatEndDate = this.pipe.transform(new Date(e), 'shortDate');
    // this.myForm.get('startDate').setValue(this.myEndDate, {
    //   onlyself: true
    // });
    console.log(this.mySmpleFormatEndDate);

  }


  ngOnInit() {
    // tslint:disable-next-line:label-position
    // this.historyService.getPlants().subscribe((res: Plant[]) => this.plants = res);

    console.log(this.historyService.getThreatHistoryList_Rest());
    this.plants = this.cameraZS.getAllPlants();
    console.log('this is the list of Plants ' + this.plants)
    console.log('this is from  bar chart compnents >= ' + this.plants);
    this.plantId = '01';
    // this.historyService.getZonesByPlantId(this.plantId)
    //   .subscribe((res: Zone[]) => this.zones = res);
    this.zones = this.cameraZS.getZones(this.plantId);
    this.zoneId = 'z001';
    this.cameras = this.historyService.getCamerasByPlantAndZone(this.plantId, this.zoneId);
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
    // @ts-ignore
    this.barChartData = [
      {
        data: myData,
        label: 'Number of Threats'
      }
    ];
    console.log(' my start date' + this.mySmpleFormatStartDate + 'my End Date ' + this.mySmpleFormatEndDate);

  }

  // get plant() {
  //   return this.myForm.get('plant');
  // }

// / Choose plant using select dropdown
  changePlant(e) {
    // this.plantId = e.value.plantId;
    // // e.target.value.plantId;
    // console.log('new plant ID from Selection' + this.plantId);
    //
    // this.zones = this.historyService.getZonesByPlantId(this.plantId);
  }

  // used to  select a  given zone
  changeZone(zid: string) {
    this.zoneId = zid;
    this.cameras = this.cameraZS.getCameras(this.plantId, this.zoneId);
    // alert('this is a zone is from HTML page ==>' + this.zoneId);
    // alert(this.historyService.getCamerasByPlantAndZone('01', '01'));

  }

///////////// Camers selection method//////////////////
  changeCamera(e) {
    this.cameraId = e.target.value;
    // alert(e.target.value);
    // alert(this.historyService.getCamerasByPlantAndZone('01', '01'));
  }



  onChangePlant(e: string) {
    this.plantId = e;
    this.cameraZS.setCurrentPlantId(e);
    // alert(' this is my plant Id from --->' + this.plantId.substring(2));
    // this.historyService.getZonesByPlantId(this.plantId)
    //   .subscribe((res: Zone[]) => {
    //       console.log('mukera two of list ' + res.toString());
    //       this.zones = res;
    //     }
    //   );
    this.zones = this.cameraZS.getZones(this.plantId)
    console.log('this is the list of zone in  plant Id =? ' + this.plantId + '   list' + this.zones);
    // alert(this.zones.toString());
  }

  set(value: string) {
    this.myStartDate = value;
  }

  getPlants() {
    return this.cameraZS.getAllPlants();
  }

  getZones() {
    return this.cameraZS.getCurrentZones();
  }
}



