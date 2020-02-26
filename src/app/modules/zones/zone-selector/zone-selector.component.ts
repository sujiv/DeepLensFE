import { Component, OnInit } from '@angular/core';
import { CameraSummary } from '../../../models/camera-summary';
import { CameraZoneService } from "../../../services/camera-zone.service";

@Component({
  selector: 'app-zone-selector',
  templateUrl: './zone-selector.component.html',
  styleUrls: ['./zone-selector.component.css']
})
export class ZoneSelectorComponent implements OnInit {
  title: string = "Chennai Vehicle & Engine Assembly Plant";
  codec: string = "H264";
  format:string = "QUICKTIME/MOV";
  duration: string = "2 SEC";
  frameRate: number = 30.0;
  cols: number=3;

  cameras: CameraSummary[];

  constructor(private cameraZS:CameraZoneService) { }

  ngOnInit(): void {
    this.cameras = this.cameraZS.getCameraSummary();
  }

  getRows(){
    let c = 0;
    let row=0;
    while(c<this.cameras.length){
      c = c+this.cols;
      row = row+1;
    }
    console.log("count::   :"+row);
    return [Array(row).keys()];
  }

  getCams(row:number){
    let cams: CameraSummary[];
    console.log("rows::"+row);
    if(row*this.cols >this.cameras.length)
      return null;
    cams = this.cameras.slice((row)*this.cols,(row+1)*this.cols);
    // for(let i=row*this.cols;i<(row+1)*this.cols;i++){
    //   if(i>this.cameras.length)
    //     return cams;
    //   cams.push(this.cameras[i]);
    // }
    return cams;
  }

}
