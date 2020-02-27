import {ChangeDetectionStrategy, Component, Input, OnInit, SimpleChange} from '@angular/core';
import { CameraSummary } from '../../../models/camera-summary';
import { CameraZoneService } from "../../../services/camera-zone.service";
import { Zone } from "../../../models/zone"
import {Plant} from "../../../models/plant";
@Component({
  selector: 'app-zone-selector',
  templateUrl: './zone-selector.component.html',
  styleUrls: ['./zone-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ZoneSelectorComponent implements OnInit {
  @Input() plant:Plant;
  zones:Zone[];
  title: string = "";
  // zoneid: string = "";
  codec: string = "H264";
  format:string = "QUICKTIME/MOV";
  duration: string = "2 SEC";
  frameRate: number = 30.0;
  cols: number=3;

  cameras: CameraSummary[];
  totalCameras:number=5;

  constructor(private cameraZS:CameraZoneService) {

  }

  ngOnInit(): void {

  }

  ngOnChange(change: SimpleChange){
    console.log("changed!!");
    if(this.plant != null )
      this.title = this.plant.plantName;
    this.cameras = this.cameraZS.getCameraSummary();
  }

  getRows(){
    return [Array(Math.ceil(this.totalCameras/this.cols)).keys()];
  }

  getCams(row:number){
    let cams: CameraSummary[];
    // console.log("rows::"+row);
    // if(row*this.cols >this.cameras.length)
    //   return null;
    // cams = this.cameras.slice((row)*this.cols,(row+1)*this.cols);
    // // for(let i=row*this.cols;i<(row+1)*this.cols;i++){
    // //   if(i>this.cameras.length)
    // //     return cams;
    // //   cams.push(this.cameras[i]);
    // // }
    return cams;
  }

  getZones() {
    return this.zones;
  }
}
