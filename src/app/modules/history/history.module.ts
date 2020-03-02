import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ChartsModule} from 'ng2-charts';
import { FilterHistoryComponent } from './main-history/filter-history/filter-history.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainHistoryComponent } from './main-history/main-history.component';
import {HistoryBarChartComponent} from './main-history/history-bar-chart/history-bar-chart.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatNativeDateModule} from '@angular/material/core';
import { HistoricalThreatListComponent } from './main-history/historical-threat-list/historical-threat-list.component';
import {MatInputModule} from '@angular/material/input';
import { FiliteringCriteriaComponent } from './main-history/filitering-criteria/filitering-criteria.component';
import {MaterialModule} from '../../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';




@NgModule({
  declarations: [
    FilterHistoryComponent,
    MainHistoryComponent,
    HistoryBarChartComponent,
    HistoricalThreatListComponent,
    // FiliteringCriteriaComponent
  ],
  exports: [
    FilterHistoryComponent,
    MaterialModule
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
    MatDatepickerModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatSelectModule,
    BrowserModule,
    MatSelectModule
  ]
})
export class HistoryModule { }
