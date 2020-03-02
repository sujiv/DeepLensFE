import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {CameraZoneService} from '../../../services/camera-zone.service';
import {Plant} from '../../../models/plant';

@Component({
  selector: 'app-main-zones',
  templateUrl: './main-zones.component.html',
  styleUrls: ['./main-zones.component.css']
})
export class MainZonesComponent implements OnInit {
  plants: Plant[];

  constructor(private cameraZoneService: CameraZoneService, private route: ActivatedRoute) {
    // this.cameraZoneService.getPlants().subscribe( ps =>{
    //   this.plants = ps;
    // });
    this.plants = this.cameraZoneService.getAllPlants();
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      if(p.id !== undefined) {
        this.cameraZoneService.setCurrentPlantId(p.pid);
      }
      if(p.zid !== undefined) {
        this.cameraZoneService.setCurrentZoneId(p.zid);
      }
      if(p.cid !== undefined) {
        this.cameraZoneService.setCurrentCameraId(p.cid);
      }
    });
  }

}
