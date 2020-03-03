import {Component, Input, OnInit} from '@angular/core';
import {Evnt} from '../../../models/evnt';

@Component({
  selector: 'app-camera-event',
  templateUrl: './camera-event.component.html',
  styleUrls: ['./camera-event.component.css']
})
export class CameraEventComponent implements OnInit {
  @Input() inst: Evnt;
  // public timestamp = '0';
  // public label = 'CAR';
  // public confidence = '66';
  // public instances = '';

  constructor() { }

  ngOnInit(): void {
  }

}
