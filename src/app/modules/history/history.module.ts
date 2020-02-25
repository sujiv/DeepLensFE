import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppModule} from '../../app.module';

// import {PieChartComponent} from "./main-history/pie-chart/pie-chart.component";
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [
],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    AppModule,
    ChartsModule
  ]
})
export class HistoryModule { }
