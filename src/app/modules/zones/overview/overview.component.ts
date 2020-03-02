import { Component, OnInit } from '@angular/core';
import {ThreatsOverview} from "../../../models/threats-overview";
import {CameraZoneService} from "../../../services/camera-zone.service";
import {ScrollToService} from "../../../services/scroll-to.service";

declare var l_clk:Function
declare var r_clk:Function
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  threatsOv:ThreatsOverview[];
  constructor(private cameraZoneService:CameraZoneService
              // , private scrollService:ScrollToService
  ) {
    this.threatsOv = cameraZoneService.getThreatsOverview();
  }

  ngOnInit(): void {
  }

  getThreats() {
    return this.threatsOv;
  }
  //
  // clickR(){
  //   // r_clk();
  //   this.scrollService.scrollTo('plant4')
  // }
  //
  // clickL() {
  //   this.scrollService.scrollTo('plant1');
  // }
}
