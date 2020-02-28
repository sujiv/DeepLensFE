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
import {CameraModule} from './modules/camera/camera.module';
import {SidebuttonsComponent} from './components/sidebuttons/sidebuttons.component';
import {SbuttonComponent} from './components/sbutton/sbutton.component';
import {ZonesModule} from './modules/zones/zones.module';
import {HistoryModule} from './modules/history/history.module';
import {MatDatepickerModule, MatInputModule} from '@angular/material';
import {ChartsModule} from 'ng2-charts';

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
    MatDatepickerModule,
    BrowserAnimationsModule,
    ChartsModule,
    // MatButtonModule,
    // MatDatepickerModule,
    // BrowserAnimationsModule,
    // MatInputModule,
    // MatInputModule,
    // MatButtonModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatCheckboxModule,
    // MatDatepickerModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatNativeDateModule,
    // MatMomentDateModule,
    CameraModule,
    HistoryModule,
    ZonesModule
  ],

  exports: [
    MatDatepickerModule,
    MatInputModule,
    BrowserAnimationsModule,
    // BarchartComponent
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
