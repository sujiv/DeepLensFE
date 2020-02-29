import {ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges} from '@angular/core';
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
  selectedZone: Zone;

  title: string;
  codec: string = 'H264';
  format: string = 'QUICKTIME/MOV';
  duration: string = '2 SEC';
  frameRate: string = '30.0';

  cameras: CameraSummary[];

  constructor(private cameraZS: CameraZoneService, private route: ActivatedRoute) {
    this.loadZones(this.cameraZS.pid);
    console.log('constructor called & pid is:');
  }

  ngOnInit(): void {
    // this.loadZones(this.plant.id);
  }
  ngOnChanges(Channge: SimpleChanges): void {
    console.log('ngOnChange called' + this.cameraZS.pid);
    this.loadZones(this.plant.id);
  }
  loadZones(pid: any): void {
    this.cameraZS.getZones(pid).subscribe(zones => {
      this.zones = zones;
      // this.cameras = this.cameraZS.getCameraSummary();
      const zid = this.cameraZS.zid;
      if (zid !== undefined) {
        this.onChange(zid);
      } else {
        this.selectedZone = this.zones[0];
      }
    });
  }

  onChange(zoneId: string) {
    console.log('Plant changed...')
    for (const z of this.zones) {
      if (z.zoneId === zoneId) {
        console.log('zone id ' + zoneId + ' selected');
        this.selectedZone = z;
        this.cameraZS.setCurrentZoneId(zoneId);
        this.cameraZS.getCameraSummary(this.selectedZone.zoneId).subscribe( cs => this.cameras = cs );
      }
    }
  }

  // getRows() {
  //   return [...Array(Math.ceil(this.totalCameras/this.cols)).keys()];
  // }

  // getCams(row: number) {
  //   let cams: CameraSummary[];
  //   // console.log('rows::'+row);
  //   if ( row * this.cols > this.cameras.length ){
  //     return null;
  //   }
  //   cams = this.cameras.slice((row) * this.cols, ( row + 1 ) * this.cols);
  //   // for(let i=row*this.cols;i<(row+1)*this.cols;i++){
  //   //   if(i>this.cameras.length)
  //   //     return cams;
  //   //   cams.push(this.cameras[i]);
  //   // }
  //   return cams;
  // }

  getPlantName() {
    return this.plant.plantName;
  }
}
