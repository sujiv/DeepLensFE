import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, en_US} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {ChartsModule} from 'ng2-charts';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {HistoryModule} from './modules/history/history.module';
import {MatNativeDateModule} from '@angular/material/core';
import {SidebuttonsComponent} from "./components/sidebuttons/sidebuttons.component";
import {SbuttonComponent} from "./components/sbutton/sbutton.component";
import {ZonesModule} from "./modules/zones/zones.module";

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
    MatButtonModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatNativeDateModule,
    // MatMomentDateModule,
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
