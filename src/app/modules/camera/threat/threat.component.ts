import {Component, Input, OnInit} from '@angular/core';
import {Evnt} from '../../../models/evnt';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-threat',
  templateUrl: './threat.component.html',
  styleUrls: ['./threat.component.css']
})
export class ThreatComponent implements OnInit {
  @Input()threat: Evnt;

  public codec = 'H264';
  public format = 'QUICKTIME / MOV';
  public duration = '2 SEC';
  public frameRate = '25.0';

  // public timestamp = '0';
  // public label = 'MACHINE';
  // public confidence = '98.9598549';
  // public instances = '';

  constructor() { }

  ngOnInit(): void {
    // const d: Date = formatDate(Date.parse(this.threat.timestamp), 'MM/dd/yyyy', 'en');
    const d: Date = new Date(this.threat.timestamp);
    console.log(new Date(this.threat.timestamp));
  }

}
