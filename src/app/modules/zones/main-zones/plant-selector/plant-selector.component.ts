import {Component, OnInit, SimpleChanges} from '@angular/core';
import {CameraZoneService} from '../../../../services/camera-zone.service';
import {Plant} from '../../../../models/plant';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-plant-selector',
  templateUrl: './plant-selector.component.html',
  styleUrls: ['./plant-selector.component.css']
})
export class PlantSelectorComponent implements OnInit {
  plants: Plant[];
  selectedPlant: Plant;

  constructor(private cameraZoneService: CameraZoneService, private route: ActivatedRoute) {
    this.loadPlant();
  }
  ngOnInit(): void {
    // this.loadPlant();
  }
  loadPlant() {
    this.cameraZoneService.getPlants().subscribe(plants => {
      this.plants = plants;
      const pid: string = this.cameraZoneService.pid;
      if (pid !== undefined) {
        this.onChange(pid);
      } else {
        this.selectedPlant = this.plants[0];
        this.cameraZoneService.setCurrentPlantId(this.selectedPlant.id);
      }
    });
  }

  onChange(plantId: string) {
    this.cameraZoneService.setCurrentPlantId(plantId);
    console.log('Plant changed to ..' + this.cameraZoneService.pid);
    for ( const p of this.plants ) {
      if ( p.id === plantId ) {
        console.log('plant id ' + plantId + 'found');
        this.selectedPlant = p;
      }
    }
  }
}
