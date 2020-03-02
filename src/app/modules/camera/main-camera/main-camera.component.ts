import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {CameraDetails} from '../../../models/camera-details';
import {CameraZoneService} from '../../../services/camera-zone.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main-camera',
  templateUrl: './main-camera.component.html',
  styleUrls: ['./main-camera.component.css']
})
export class MainCameraComponent implements OnInit {
  camDetails: CameraDetails;
  public cameraName = 'Camera_03';

  public codec = 'H264';
  public format = 'QUICKTIME / MOV';
  public duration = '2 SEC';
  public frameRate = '25.0';


  constructor(private cameraZS: CameraZoneService, private route: ActivatedRoute) {
    this.route.params.subscribe(p => {
      if (p.pid !== undefined) {
        this.cameraZS.setCurrentPlantId(p.pid);
      }
      if (p.zid !== undefined) {
        this.cameraZS.setCurrentZoneId(p.zid);
      }
      if (p.cid !== undefined) {
        this.cameraZS.setCurrentCameraId(p.cid);
      }
    });
    this.load();
  }

  ngOnInit(): void {
    if (this.camDetails === undefined)
      this.load();
  }
  load() {
    this.cameraZS.getCameraDetails(this.cameraZS.pid, this.cameraZS.zid, this.cameraZS.cid).subscribe( cd => {
      this.camDetails = cd;
      this.cameraName = 'Camera_' + this.camDetails.cid;
    } );
  }

  getThreats() {
    if (this.camDetails === undefined) {
      this.load();
    } else{
      return this.camDetails.ths;
    }
  }

  getInstances() {
    if(this.camDetails === undefined) {
      this.load();
    }
    return this.camDetails.ins;
  }
}
