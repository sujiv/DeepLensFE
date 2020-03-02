import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Zone} from '../../../../../../models/zone';
import {CameraSummary} from '../../../../../../models/camera-summary';
import {CameraZoneService} from '../../../../../../services/camera-zone.service';

@Component({
  selector: 'app-cams-group',
  templateUrl: './cams-group.component.html',
  styleUrls: ['./cams-group.component.css']
})
export class CamsGroupComponent implements OnInit {
  @Input()zn: Zone;
  @Input()
  cameras: CameraSummary[];

  constructor(private cameraZS: CameraZoneService) {
    // this.cameraZS.getCameraSummary().subscribe( cs => this.cameras = cs );
  }

  ngOnInit(): void {
    // this.cameraZS = this.cameraZS.getCameraSummary();
    this.cameraZS.getCameraSummary().subscribe( cs => this.cameras = cs );
    // this.cameras = this.cameraZS.getCameraSummary();
  }

  ngOnChange(change: SimpleChanges): void {
    console.log("From camsGroup");
    this.cameraZS.getCameraSummary().subscribe( cs => this.cameras = cs );
    // this.cameras = this.cameraZS.getCameraSummary();
  }

  getName() {
    return "Zones";
  }

  getCameras() {
    // if (this.zn.zoneId !== this.cameraZS.zid) {
    //   this.cameraZS.getCameraSummary().subscribe( cs => this.cameras = cs );
    // }
    return this.cameras;
  }
}
