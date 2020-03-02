import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {CameraZoneService} from '../../../../services/camera-zone.service';
import {Plant} from '../../../../models/plant';
import {ActivatedRoute} from '@angular/router';
import {Zone} from '../../../../models/zone';

@Component({
  selector: 'app-plant-selector',
  templateUrl: './plant-selector.component.html',
  styleUrls: ['./plant-selector.component.css']
})
export class PlantSelectorComponent implements OnInit {
  @Input()plants: Plant[];
  zones: Zone[];
  selectedPlant: Plant;

  constructor(private cameraZoneService: CameraZoneService, private route: ActivatedRoute) {
    // this.loadPlant();
  }
  ngOnInit(): void {
    this.selectedPlant = this.plants[this.loadSelected()];
    this.zones = this.cameraZoneService.getCurrentZones();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.selectedPlant = this.plants[this.loadSelected()];
  }
  loadSelected() {
    // console.log("PlantComponent:"+this.cameraZoneService.pid+"<-pid");
    // const pid: string = this.cameraZoneService.pid;
    // if (pid !== undefined) {
    //   this.onChange(pid);
    // } else {
    //   this.selectedPlant = this.plants[0];
    //   this.cameraZoneService.setCurrentPlantId(this.selectedPlant.id);
    // }
    let i = 0;
    for (const p of this.plants) {
      if (p.id === this.cameraZoneService.pid) {
        return i;
      }
      i++;
    }
    return 0;
  }

  onChange(plantId: string) {
    this.cameraZoneService.setCurrentPlantId(plantId);
    this.cameraZoneService.setCurrentZoneId(this.plants[0].id);
    console.log('Plant changed to ..' + this.cameraZoneService.pid);
    for ( const p of this.plants ) {
      if ( p.id === plantId ) {
        console.log('plant id ' + plantId + 'found');
        this.selectedPlant = p;
        this.zones = this.cameraZoneService.getZones(p.id);
      }
    }
  }

  getSelected() {
    let i = 0;
    for (const plant of this.plants){
      if (plant.id === this.cameraZoneService.pid){
        return i;
      }
      i++;
    }
    return i;
    // if (this.cameraZoneService.pid !== undefined) {
    //   return this.cameraZoneService.pid;
    // }
    // if (this.selectedPlant === undefined) {
    //     return this.plants[0].id;
    //   // return this.cameraZoneService.pid;
    // }
    // return this.selectedPlant.id;
  }

  getZones() {
    return this.cameraZoneService.getZones(this.cameraZoneService.pid);
  }
}
