import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {HistoryModule} from './modules/history/history.module';
import {MatNativeDateModule} from '@angular/material/core';
import {SidebuttonsComponent} from './components/sidebuttons/sidebuttons.component';
import {SbuttonComponent} from './components/sbutton/sbutton.component';
import {ZonesModule} from './modules/zones/zones.module';
import {CameraModule} from './modules/camera/camera.module';
import {ChartsModule} from "ng2-charts";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SidebuttonsComponent,
    SbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ChartsModule,
    CameraModule,
    HistoryModule,
    ZonesModule
  ],

  exports: [
    BrowserAnimationsModule,
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
