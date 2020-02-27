import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainZonesComponent } from './main-zones/main-zones.component';
import { PlantSelectorComponent } from './plant-selector/plant-selector.component';
import { ZoneSelectorComponent } from './zone-selector/zone-selector.component';
import { CamsComponent } from './cams/cams.component';
import {AppRoutingModule} from "../../app-routing.module";
import { OverviewComponent } from './overview/overview.component';
import { ThreatOverviewComponent } from './threat-overview/threat-overview.component';


@NgModule({
  declarations: [MainZonesComponent, PlantSelectorComponent, ZoneSelectorComponent, CamsComponent, OverviewComponent, ThreatOverviewComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [MainZonesComponent]
})
export class ZonesModule { }
