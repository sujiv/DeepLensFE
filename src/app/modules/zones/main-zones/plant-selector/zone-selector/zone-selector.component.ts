import {ChangeDetectionStrategy, Component, Input, OnInit, SimpleChange} from '@angular/core';
import { CameraSummary } from '../../../../../models/camera-summary';
import { CameraZoneService } from '../../../../../services/camera-zone.service';
import { Zone } from '../../../../../models/zone';
import {Plant} from '../../../../../models/plant';
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
  format:string = 'QUICKTIME/MOV';
  duration: string = '2 SEC';
  frameRate: string = '30.0';
  cols: number=3;

  cameras: CameraSummary[];
  totalCameras: number = 5;

  constructor(private cameraZS: CameraZoneService) {
    this.plant = cameraZS.getPlants()[0];
    this.zones = cameraZS.getZones('01');
    this.cameras = this.cameraZS.getCameraSummary();
  }

  ngOnInit(): void {
    this.cameras = this.cameraZS.getCameraSummary();
  }

  onChange(zoneId: string) {
    console.log('Plant changed...')
    for (let z of this.zones) {
      if (z.zoneId === zoneId) {
        console.log('zone id ' + zoneId + ' selected');
        this.selectedZone = z;
        this.cameras = this.cameraZS.getCameraSummary();
      }
    }
  }

  getRows() {
    return [...Array(Math.ceil(this.totalCameras/this.cols)).keys()];
  }

  getCams(row: number) {
    let cams: CameraSummary[];
    // console.log('rows::'+row);
    if ( row * this.cols > this.cameras.length ){
      return null;
    }
    cams = this.cameras.slice((row) * this.cols, ( row + 1 ) * this.cols);
    // for(let i=row*this.cols;i<(row+1)*this.cols;i++){
    //   if(i>this.cameras.length)
    //     return cams;
    //   cams.push(this.cameras[i]);
    // }
    return cams;
  }

  getZones() {
    this.zones = this.cameraZS.getZones(this.plant.id);
    return this.zones;
  }

  getPlantName() {
    return this.plant.plantName;
  }
}
