import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainZonesComponent } from './main-zones/main-zones.component';
import { PlantSelectorComponent } from './plant-selector/plant-selector.component';
import { ZoneSelectorComponent } from './zone-selector/zone-selector.component';



@NgModule({
  declarations: [MainZonesComponent, PlantSelectorComponent, ZoneSelectorComponent],
  imports: [
    CommonModule
  ],
  exports: [PlantSelectorComponent, MainZonesComponent]
})
export class ZonesModule { }
