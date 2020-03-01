import {ChangeDetectionStrategy, Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
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
  @Input()zones: Zone[];
  selectedZone: Zone;

  title: string;
  codec: string = 'H264';
  format: string = 'QUICKTIME/MOV';
  duration: string = '2 SEC';
  frameRate: string = '30.0';


  constructor(private cameraZS: CameraZoneService, private route: ActivatedRoute) {
    // this.loadZones(this.cameraZS.pid);
    console.log('constructor called & pid is:');
  }

  ngOnInit(): void {
    // this.loadZones(this.plant.id);
  }
  ngOnChanges(Change: SimpleChanges): void {
    console.log('ngOnChange called' + this.cameraZS.pid)
    if (this.ready()) {
      this.loadZones(this.cameraZS.pid);
    }
  }
  loadZones(pid: any): void {
    // this.cameraZS.getZones(pid).subscribe(zones => {
    //   this.zones = zones;
    //   // this.cameras = this.cameraZS.getCameraSummary();
    this.zones = this.cameraZS.getZones(pid);
    let zid = this.cameraZS.zid;
    if (zid === undefined) {
      zid = this.zones[0].zoneId;
    }
    this.find(zid);
  }

  onChange(zoneId: string){
    this.find(zoneId);
    this.cameraZS.setCurrentZoneId(zoneId);
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
    for (const z of this.zones){
      if (z.zoneId === this.cameraZS.zid){
        return i;
      }
      i++;
    }
    return 0;
  }
  getPlantName() {
    return this.plant.plantName;
  }

  private ready() {
    return this.plant !== null;
  }
}
