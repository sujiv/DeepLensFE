import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {CameraZoneService} from '../../../../services/camera-zone.service';
import {Plant} from '../../../../models/plant';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-plant-selector',
  templateUrl: './plant-selector.component.html',
  styleUrls: ['./plant-selector.component.css']
})
export class PlantSelectorComponent implements OnInit {
  @Input()plants: Plant[];
  selectedPlant: Plant;

  constructor(private cameraZoneService: CameraZoneService, private route: ActivatedRoute) {
    // this.loadPlant();
  }
  ngOnInit(): void {
    this.loadSelected();
  }
  loadSelected() {
    console.log("PlantComponent:"+this.cameraZoneService.pid+"<-pid");
    const pid: string = this.cameraZoneService.pid;
    if (pid !== undefined) {
      this.onChange(pid);
    } else {
      this.selectedPlant = this.plants[0];
      this.cameraZoneService.setCurrentPlantId(this.selectedPlant.id);
    }
  }

  onChange(plantId: string) {
    this.cameraZoneService.setCurrentPlantId(plantId);
    this.cameraZoneService.setCurrentZoneId(this.plants[0].id);
    console.log('Plant changed to ..' + this.cameraZoneService.pid);
    for ( const p of this.plants ) {
      if ( p.id === plantId ) {
        console.log('plant id ' + plantId + 'found');
        this.selectedPlant = p;
      }
    }
  }

  getSelected() {
    if (this.cameraZoneService.pid !== undefined) {
      return this.cameraZoneService.pid;
    }
    if (this.selectedPlant === undefined) {
        return this.plants[0].id;
      // return this.cameraZoneService.pid;
    }
    return this.selectedPlant.id;
  }
}
