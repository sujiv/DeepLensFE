import {ChangeDetectionStrategy, Component, Input, OnInit, OnChanges, SimpleChanges, Output} from '@angular/core';
import { CameraSummary } from '../../../../../models/camera-summary';
import { CameraZoneService } from '../../../../../services/camera-zone.service';
import { Zone } from '../../../../../models/zone';
import {Plant} from '../../../../../models/plant';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-zone-selector',
  templateUrl: './zone-selector.component.html',
  styleUrls: ['./zone-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ZoneSelectorComponent implements OnInit {
  @Input() plant: Plant;
  zones: Zone[];
  // @Output()
  selectedZone: Zone;
  cameras: CameraSummary[];

  title: string;
  codec: string = 'H264';
  format: string = 'QUICKTIME/MOV';
  duration: string = '2 SEC';
  frameRate: string = '30.0';


  constructor(private cameraZS: CameraZoneService, private route: ActivatedRoute) {
    // this.loadZones(this.cameraZS.pid);
    console.log('constructor called & subscribed');
    this.cameraZS.getCameraSummary().subscribe(cs => this.cameras = cs);
  }

  ngOnInit(): void {
    this.cameraZS.getCameraSummary().subscribe(cs => this.cameras = cs);
    // this.loadZones(this.plant.id);
    // if(this.plant !== undefined)
    //   this.zones = this.cameraZS.getZones(this.plant.id);
  }
  ngOnChanges(Change: SimpleChanges): void {
    this.cameraZS.getCameraSummary().subscribe(cs => this.cameras = cs);
  }
  //   console.log('ngOnChange called' + this.cameraZS.pid)
  //   if (this.ready()) {
  //     this.loadZones(this.cameraZS.pid);
  //   }
  //   // if(this.zones === undefined)
  //   //   this.zones = this.cameraZS.getZones(this.plant.id);
  // }
  // loadZones(pid: any): void {
  //   // this.cameraZS.getZones(pid).subscribe(zones => {
  //   //   this.zones = zones;
  //   //   // this.cameras = this.cameraZS.getCameraSummary();
  //   let zid = this.cameraZS.zid;
  //   if (zid === undefined) {
  //     zid = this.zones[0].zoneId;
  //   }
  //   this.find(zid);
  // }

  onChange(zoneId: string) {
    this.find(zoneId);
    this.cameraZS.setCurrentZoneId(zoneId);
    this.cameraZS.getCameraSummary().subscribe(cs => this.cameras = cs);
  }
  find(zoneId: string) {
    console.log('zone changed...')
    for (const z of this.zones) {
      if (z.zoneId === zoneId) {
        console.log('zone id ' + zoneId + ' selected');
        this.selectedZone = z;
      }
    }
  }

  getSelected() {
    let i = 0;
    if (this.cameraZS.zid === undefined){
      return 0;
    }
    for (const z of this.zones) {
      if (z.zoneId === this.cameraZS.zid) {
        return i;
      }
      i++;
    }
    return 0;
  }
  getPlantName() {
    return this.cameraZS.getCurrPlantName();
  }
  getZones() {
    this.zones = this.cameraZS.getCurrentZones();
    return this.zones;
  }

  getCameraS() {
    if(this.cameras === undefined){
      this.cameraZS.getCameraSummary().subscribe(cs => {
        this.cameras = cs;
        return this.cameras;
      });
    }

    return this.cameras;
  }
}
