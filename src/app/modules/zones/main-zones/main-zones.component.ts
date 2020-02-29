import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {CameraZoneService} from '../../../services/camera-zone.service';

@Component({
  selector: 'app-main-zones',
  templateUrl: './main-zones.component.html',
  styleUrls: ['./main-zones.component.css']
})
export class MainZonesComponent implements OnInit {

  constructor(private cameraZoneService: CameraZoneService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.cameraZoneService.setCurrentPlantId(p.pid);
      this.cameraZoneService.setCurrentZoneId(p.zid);
      this.cameraZoneService.setCurrentCameraId(p.cid);
    });
  }

}
