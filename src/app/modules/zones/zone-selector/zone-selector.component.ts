import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CameraSummary} from '../../../models/camera-summary';
import {CameraZoneService} from "../../../services/camera-zone.service";
import {Zone} from "../../../models/zone"
import {Plant} from "../../../models/plant";

@Component({
  selector: 'app-zone-selector',
  templateUrl: './zone-selector.component.html',
  styleUrls: ['./zone-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoneSelectorComponent implements OnInit {
  @Input() plant: Plant;
  zones: Zone[];
  title: string = "";
  // zoneid: string = "";
  codec: string = "H264";
  format: string = "QUICKTIME/MOV";
  duration: string = "2 SEC";
  frameRate: number = 30.0;
  cols: number = 3;

  cameras: CameraSummary[];

  constructor(private cameraZS: CameraZoneService) {
    if (this.plant != null)
      this.title = this.plant.plantName;
  }

  ngOnInit(): void {
    this.cameraZS.getCameraSummary().subscribe(cs => this.cameras = cs);
  }

  getRows() {
    let c = 0;
    let row = 0;
    while (c < this.cameras.length) {
      c = c + this.cols;
      row = row + 1;
    }
    // console.log("count::   :"+row);
    return [Array(3).keys()];
  }

  getCams(row: number) {
    let cams: CameraSummary[];
    // console.log("rows::"+row);
    if (row * this.cols > this.cameras.length)
      return null;
    cams = this.cameras.slice((row) * this.cols, (row + 1) * this.cols);
    // for(let i=row*this.cols;i<(row+1)*this.cols;i++){
    //   if(i>this.cameras.length)
    //     return cams;
    //   cams.push(this.cameras[i]);
    // }
    return cams;
  }

}
