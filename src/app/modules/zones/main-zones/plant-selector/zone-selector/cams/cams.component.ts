import {Component, Input, OnInit} from '@angular/core';
import {CameraSummary} from '../../../../../../models/camera-summary';
import { Zone } from 'src/app/models/zone';
import {CameraZoneService} from '../../../../../../services/camera-zone.service';

@Component({
  selector: 'app-cams',
  templateUrl: './cams.component.html',
  styleUrls: ['./cams.component.css']
})
export class CamsComponent implements OnInit {
  @Input()camSummary: CameraSummary;
  @Input()zone: Zone;

  constructor(cameraZS: CameraZoneService) {
    this.zone = cameraZS.getZones('01')[0];
  }

  ngOnInit(): void {
  }

  getThreats(): string {
    if ( this.camSummary.threats > 0 ) {
      return String(this.camSummary.threats);
    }

    return 'None';
  }

  getPriority() {
    if ( this.camSummary.threats > 0 ) {
      return ['liner', 'critical'];
    }
    else if ( this.camSummary.active === false ) {
      return ['liner', 'off' ];
    }
    else return ['liner', 'normal'];
  }

  getLink() {
      return `/plants/${this.camSummary.plantId}/zones/${this.camSummary.zoneId}/cameras/${this.camSummary.id}`;
  }
}
