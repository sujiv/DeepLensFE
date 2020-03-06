import {Component, Input, OnInit} from '@angular/core';
import {FilterHistoryComponent} from './filter-history/filter-history.component';
import {HistoryBarChartComponent} from './history-bar-chart/history-bar-chart.component';
import {HistoricalThreatListComponent} from './historical-threat-list/historical-threat-list.component';
import {CameraZoneService} from '../../../services/camera-zone.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-main-history',
  templateUrl: './main-history.component.html',
  styleUrls: ['./main-history.component.css']
})
export class MainHistoryComponent implements OnInit {


  constructor(private cameraZoneService: CameraZoneService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(p => {
      if (p.id !== undefined) {
        this.cameraZoneService.setCurrentPlantId(p.pid);
      }
      if (p.zid !== undefined) {
        this.cameraZoneService.setCurrentZoneId(p.zid);
      }
      if (p.cid !== undefined) {
        this.cameraZoneService.setCurrentCameraId(p.cid);
      }
    });
  }

}
