import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-camera',
  templateUrl: './main-camera.component.html',
  styleUrls: ['./main-camera.component.css']
})
export class MainCameraComponent implements OnInit {
  public cameraName = 'Camera_03';

  public codec = 'H264';
  public format = 'QUICKTIME / MOV';
  public duration = '2 SEC';
  public frameRate = '25.0';


  constructor() { }

  ngOnInit(): void {
  }

}
