import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ThreatsOverview} from "../../../models/threats-overview";

@Component({
  selector: 'app-threat-overview',
  templateUrl: './threat-overview.component.html',
  styleUrls: ['./threat-overview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreatOverviewComponent implements OnInit {
  @Input()threat:ThreatsOverview;

  constructor() { }

  ngOnInit(): void {
  }

  getMessage() {
    return "Threats Detected";
  }

  getTotalThreats():string{
    if (this.threat.totalThreats<10){
      return '0'+this.threat.totalThreats;
    }

    return this.threat.totalThreats+'';
  }

  getZoneIdCamId() {
    return this.threat.zoneId + ' | ' + this.threat.cameraId;
  }
}
