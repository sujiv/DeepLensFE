import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainZonesComponent } from './main-zones/main-zones.component';
import { PlantSelectorComponent } from './main-zones/plant-selector/plant-selector.component';
import { ZoneSelectorComponent } from './main-zones/plant-selector/zone-selector/zone-selector.component';
import { CamsComponent } from './main-zones/plant-selector/zone-selector/cams-group/cams/cams.component';
import {AppRoutingModule} from '../../app-routing.module';
import { OverviewComponent } from './main-zones/overview/overview.component';
import { ThreatOverviewComponent } from './main-zones/overview/threat-overview/threat-overview.component';
import { CamsGroupComponent } from './main-zones/plant-selector/zone-selector/cams-group/cams-group.component';


@NgModule({
  declarations: [MainZonesComponent
    , PlantSelectorComponent
    , ZoneSelectorComponent
    , CamsComponent
    , OverviewComponent
    , ThreatOverviewComponent, CamsGroupComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [MainZonesComponent]
})
export class ZonesModule { }
