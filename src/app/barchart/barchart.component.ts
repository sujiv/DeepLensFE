import {Component, OnInit} from '@angular/core';
import {ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {HistoryService} from '../services/history.service';
import {ThreatsSummary} from '../models/threats-summary';
import {Data} from '@angular/router';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor(private historyService: HistoryService) {
  }

  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = true;
  // public barChartPlugins = [];
  //
  // public barChartData: ChartDataSets[] = [
  //   // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];


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
  // ];
  ngOnInit() {

    const myJsonData: ThreatsSummary[] = this.historyService.getThreatsSummary();
    console.log(myJsonData)
    const myLabels: any[] = [];
    // tslint:disable-next-line:prefer-const ban-types
    let myData: any[] = [];
    for (let i = 0; i < myJsonData.length; i++) {

      myLabels[i] = myJsonData[i].day;

      myData[i] = myJsonData[i].numberOfThreats;
    }
    this.barChartLabels = myLabels;
    // @ts-ignore
    this.barChartData = [{data: myData, Label: 'Number of Threats'}];
  }





}
