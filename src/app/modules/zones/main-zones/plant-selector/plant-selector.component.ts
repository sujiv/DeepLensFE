import { Component, OnInit } from '@angular/core';
import {CameraZoneService} from '../../../../services/camera-zone.service';
import {Plant} from '../../../../models/plant';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-plant-selector',
  templateUrl: './plant-selector.component.html',
  styleUrls: ['./plant-selector.component.css']
})
export class PlantSelectorComponent implements OnInit {
  pid: string;
  plants: Plant[];
  selectedPlant: Plant;

  constructor(private cameraZoneService: CameraZoneService, private route: ActivatedRoute) {
    this.plants = cameraZoneService.getPlants();
    // console.log("plants:"+this.plants)
  }

  ngOnInit(): void {
    this.selectedPlant = this.plants[0];
    // this.route.queryParams.forEach(param => console.log('params ::' + param.pid));
    this.route.params.subscribe(p => {
      console.log(p);
      console.log('plant :' + p.pid);

      this.pid = p.pid;
    });
    this.onChange( this.pid );
      // .get (param=>param.pid)
      // .subscribe(param => {
      //   console.log( 'plant navigated:' + param[0]);
      //   this.onChange(param.pid);
      // });
  }

  getPlants() {
    // console.log(this.plants);
    return this.plants;
  }

  onChange(plantId: string) {
    console.log('Plant changed...');
    for ( const p of this.plants ) {
      if ( p.id === plantId ) {
        console.log('plant id ' + plantId + 'found');
        this.selectedPlant = p;
      }
    }
  }

  getSelected() {
    return this.selectedPlant;
  }
}
