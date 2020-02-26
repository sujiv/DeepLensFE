import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ChartsModule} from 'ng2-charts';
import { FilterHistoryComponent } from './main-history/filter-history/filter-history.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { MainHistoryComponent } from './main-history/main-history.component';
import {BarchartComponent} from './main-history/barchart/barchart.component';
import {HistoryBarChartComponent} from './main-history/history-bar-chart/history-bar-chart.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatNativeDateModule} from '@angular/material/core';
import { HistoricalThreatListComponent } from './main-history/historical-threat-list/historical-threat-list.component';
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    FilterHistoryComponent,
    BarchartComponent,
    MainHistoryComponent,
    HistoryBarChartComponent,
    HistoricalThreatListComponent
  ],
  exports: [
    FilterHistoryComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ChartsModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatGridListModule,
    MatNativeDateModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule
  ]
})
export class HistoryModule { }
