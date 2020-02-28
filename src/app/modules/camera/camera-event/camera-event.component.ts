import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera-event',
  templateUrl: './camera-event.component.html',
  styleUrls: ['./camera-event.component.css']
})
export class CameraEventComponent implements OnInit {
  public timestamp = '0';
  public label = 'CAR';
  public confidence = '66';
  public instances = '';

  constructor() { }

  ngOnInit(): void {
  }

}
