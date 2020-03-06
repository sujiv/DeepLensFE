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
import {aliasTransformFactory} from '@angular/compiler-cli/src/ngtsc/transform';


@Component({
  selector: 'app-history-bar-chart',
  templateUrl: './history-bar-chart.component.html',
  styleUrls: ['./history-bar-chart.component.css']
})
export class HistoryBarChartComponent implements OnInit {
  myDate: Date;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myStartDate: string;
  myEndDate: string;
  myForm: FormGroup;
  myJsonData: ThreatsSummary[];
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
  plantId: any;
  zoneId: any;
  cameraId: any;
  plantSelected;
  zoneSelected;
  selectedCamera: Camera;
  sDate: string;
  eDate: string;
  selectedPlant: Plant;
  selectedZone: Zone;

  constructor(public fb: FormBuilder, private historyService: HistoryService, private cameraService: CameraZoneService) {
    // this.pipe = new DatePipe('en-US');
    // this.now = Date.now();
    // this.myShortFormat = this.pipe.transform(this.now, 'MM/dd/yyyy');
    // this.myShortFormat = this.pipe.transform(this.now, 'shortDate');
    // @ts-ignore
    // this.myForm = new FormGroup();
    this.isInint = false;
    this.plantSelected = false;
    this.zoneSelected = false;
    this.plantId = '1';
    this.myJsonData = null;
    this.reactiveForm();
    // this.ngOnInit();
    this.populateChart();
  }

  ////////////// using Service////////////
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales:
      {
        xAxes: [{
          gridLines: {
            display: false,
          }
          ,
          ticks: {
            fontSize: 9,
            fontFamily: 'Antenna-Medium'
          }
        }],
        yAxes: [{
          gridLines: {
                display: false
          },
          ticks: {
            fontSize: 0
          }
        }]
      },
    legend: {
      position: 'top',
      display: false
    }
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
      backgroundColor: 'rgba(0,0, 160,0.8)',
    },
  ];
  public options: ChartOptions = {
    scales: {
      xAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
        // ,
        // ticks: {
        //   fontSize: 7,
        //   fontFamily: 'Antenna-Medium'
        // }
      }],
      yAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }]
      // xAxes: [{
      //   gridLines: {
      //     display: false
      //   },
      //   ticks: {
      //     fontSize: 7,
      //     fontFamily: 'Antenna-Medium'
      //   }
      // }],
      // yAxes: [{
      //   gridLines: {
      //     display: false
      //   }
      // }]
    }
  };

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
  // startDate(e) {
  //   this.myStartDate = new Date(e.target.value).toISOString().substring(0, 10);
  //   this.mySmpleFormatStartDate = this.pipe.transform(new Date(e.target.value), 'shortDate');
  //   this.myForm.get('startDate').setValue(this.myStartDate, {
  //     onlyself: true
  //   });
  //   console.log(this.myShortFormat);
  // }


  submitForm() {
    console.log(this.myForm.value);
  }


  ngOnInit() {
    this.plants = this.cameraService.getAllPlants();
    this.plantId = this.cameraService.pid;
    //this.plants[0].id;
    this.zones = this.cameraService.getZones(this.plantId);
    console.log(' my current  pid  zid are '  + this.plantId + '   ===' + this.zones[0].zoneId);
    this.cameras = this.cameraService.getCameras(this.plantId, this.zones[1].zoneId);

    this.reactiveForm();
    this.populateChart();
    this.isInint = true;
  }

  filterThreatsHistoryByDate() {
    this.myJsonData = this.historyService.getThreatsSummaryByStartDateAndEndDate(this.mySmpleFormatStartDate, this.mySmpleFormatEndDate);
    this.populateChart();
  }

  populateChart() {

    if (!this.isInint) {
      this.myJsonData = this.historyService.getThreatsSummary();
      this.isInint = true;
    } else {

    }
    console.log(this.myJsonData);
    const myLabels: any[] = [];
    const myData: any[] = [];
    for (let i = 0; i < this.myJsonData.length; i++) {

      myLabels[i] = this.myJsonData[i].day;

      myData[i] = this.myJsonData[i].numberOfThreats;
    }
    this.barChartLabels = myLabels;
    // @ts-ignore
    // @ts-ignore
    this.barChartData = [
      {
        data: myData,
        label: 'Number of Threats',
        showLine: false,
        borderWidth: 0,
        maxBarThickness: 12,

        pointBorderWidth: 1,
        // spanGaps : false

      }
    ]
    ;
    console.log(' my start date' + this.mySmpleFormatStartDate + 'my End Date ' + this.mySmpleFormatEndDate);

  }

  // used to  select a  given zone
  changeZone(e) {
    this.zoneId = e.target.value;
    this.cameras = this.cameraService.getCameras(this.plantId, this.zoneId);
    // this.zones= this.historyService.getZonesByPlantId(this.)
    // alert('this is a zone is from HTML page ==>' + this.zoneId);
    // alert(this.historyService.getCamerasByPlantAndZone('01', '01'));

  }

///////////// Camers selection method//////////////////

  changeCamera(cid) {
    // this.cameraId = cid.target.value;
    // alert(this.historyService.getCamerasByPlantAndZone('01', '01'));

    this.cameraService.setCurrentPlantId(this.plantId);
    this.cameraService.setCurrentZoneId(this.zoneId);
    console.log('Camera changed to ..' + this.cameraService.cid);
    for (const c of this.cameras) {
      if (c.id === cid) {
        console.log('zid  id from  current given plant ... ' + cid);
        this.selectedCamera = c;
        this.cameraId = c.zoneId;
        console.log('this is cam Id after selecting plant and Zone >>>>>>>>> ' + this.cameraId);
        // @ts-ignore
        // this.cameras = this.cameraService.getCameras(p.id, z.zoneId);
        this.myJsonData = this.historyService.getThreatsSummaryBy_Plant_AndZone_And_Camera(this.plantId, this.zoneId, this.cameraId);
        this.populateChart();

      }
    }
  }


  onChangePlant(e) {

    this.plantId = e.target.value.substring(2).trim();
    if (this.plantId !== undefined) {

      this.myJsonData = this.historyService.getThreatsSummaryByPlant(this.plantId);

    }
    // this.zones = this.cameraService.getZones(this.plants[0].id);

    this.zones = this.cameraService.getZones(this.plantId);
    console.log('this is zones list ' + this.zones);
    // this.zones = this.historyService.getZonesByPlantId(this.plantId.substring(2));
    // this.historyService.getZonesByPlantId(this.plantId.substring(2))
    //   .subscribe((res: Zone[]) => {
    //       console.log('mukera two of list ' + res.toString());
    //       this.zones = res;
    //     }
    //   );
    console.log('this is the list of zone in  plant Id =? ' + this.plantId + '   list' + this.zones);
    // alert(this.zones.toString());
  }

  getStartDateCalendar(e: string) {
    this.pipe = new DatePipe('en-US');
    this.mySmpleFormatStartDate = this.pipe.transform(new Date(e), 'MM/dd/yyyy');
    // alert('this is my start  date    >' + this.mySmpleFormatStartDate);
  }

  getEndDateCalendar(e) {
    this.pipe = new DatePipe('en-US');
    this.mySmpleFormatEndDate = this.pipe.transform(new Date(e), 'MM/dd/yyyy');

    // alert('this is my date    >' + this.mySmpleFormatStartDate)
    // alert('this is my End date    >' + this.mySmpleFormatEndDate);
  }

  getSelectedPlant() {
    let i = 0;
    if (this.zoneId === undefined) {
      return 0;
    }
    for (const p of this.plants) {
      if (p.id === this.plantId) {
        return i;
      }
      i++;
    }
    return 0;
  }

  onChange(plantId: string) {

    this.cameraService.setCurrentPlantId(plantId);
    this.cameraService.setCurrentZoneId(this.plants[0].id);
    console.log('Plant changed to ..' + this.cameraService.pid);
    for (const p of this.plants) {
      if (p.id === plantId) {
        console.log('plant id ' + plantId + 'found');
        this.selectedPlant = p;
        this.plantId = p.id;
        console.log('thi sis mukera two>>>>>>>>> ' + p.id);
        // @ts-ignore
        this.zones = this.cameraService.getZones(p.id);
        this.myJsonData = this.historyService.getThreatsSummaryByPlant(p.id);
        this.populateChart();

      }
    }
  }

  getSelected() {
    let i = 0;
    for (const plant of this.plants) {
      if (plant.id === this.cameraService.pid) {
        return i;
      }
      i++;
    }
    return i;
  }

// =========================================

  onZoneChange(zid: string) {

    this.cameraService.setCurrentPlantId(zid);
    this.cameraService.setCurrentZoneId(this.plants[0].id);
    console.log('zone changed to ..' + this.cameraService.zid);
    for (const z of this.zones) {
      if (z.zoneId === zid) {
        console.log('zid  id from  current given plant ... ' + zid);
        this.selectedZone = z;
        this.zoneId = z.zoneId;
        console.log('thi sis mukera two>>>>>>>>> ' + z.zoneId);
        // @ts-ignore
        this.cameras = this.cameraService.getCameras(this.plants[0].id, this.zoneId);
        this.myJsonData = this.historyService.getThreatsSummaryByPlantAndZone(this.plants[0].id, this.zones[0].zoneId);
        this.populateChart();

      }
    }
  }


  // ==================================================
  getSelectedZone() {
    let i = 0;
    for (const zone of this.zones) {
      if (zone.zoneId === this.cameraService.zid) {
        return i;
      }
      i++;
    }
    return i;
  }
}



