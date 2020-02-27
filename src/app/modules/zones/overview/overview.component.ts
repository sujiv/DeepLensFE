import { Component, OnInit } from '@angular/core';
import {ThreatsOverview} from "../../../models/threats-overview";
import {CameraZoneService} from "../../../services/camera-zone.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  threatsOv:ThreatsOverview[];
  constructor(cameraZoneService:CameraZoneService) {
    this.threatsOv = cameraZoneService.getThreatsOverview();
  }

  ngOnInit(): void {
  }

  getThreats() {
    return this.threatsOv;
  }
}
