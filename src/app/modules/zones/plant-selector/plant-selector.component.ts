import { Component, OnInit } from '@angular/core';
import {CameraZoneService} from '../../../services/camera-zone.service';
import {Plant} from '../../../models/plant';

@Component({
  selector: 'app-plant-selector',
  templateUrl: './plant-selector.component.html',
  styleUrls: ['./plant-selector.component.css']
})
export class PlantSelectorComponent implements OnInit {
  plants: Plant[];
  selectedPlant: Plant;

  constructor(cameraZoneService: CameraZoneService) {
    this.plants = cameraZoneService.getAllPlants();
  }

  ngOnInit(): void {
    this.selectedPlant = this.plants[0];
  }

  getPlants() {
    // console.log(this.plants);
    return this.plants;
  }

  onChange(plantId: string) {
    for (const p of this.plants) {
      if (p.id === plantId) {
        this.selectedPlant = p;
      }
    }
  }

  getSelected() {
    return this.selectedPlant;
  }
}
