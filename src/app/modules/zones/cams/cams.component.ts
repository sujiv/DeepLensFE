import {Component, Input, OnInit} from '@angular/core';
import {CameraSummary} from "../../../models/camera-summary";

@Component({
  selector: 'app-cams',
  templateUrl: './cams.component.html',
  styleUrls: ['./cams.component.css']
})
export class CamsComponent implements OnInit {
  @Input()camSummary:CameraSummary;

  constructor() { }

  ngOnInit(): void {
  }

  getThreats():string {
    if(this.camSummary.threats>0)
      return String(this.camSummary.threats)

    return "None";

  }

  getPriority() {
    if(this.camSummary.threats>0)
      return ["liner","critical"];
    if(this.camSummary.active==false)
      return ["liner","off"];
    else
      return ["liner","normal"];
  }

  getLink() {
    return "/zone1/camera/"+this.camSummary.id;
  }
}