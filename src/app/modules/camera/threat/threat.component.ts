import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-threat',
  templateUrl: './threat.component.html',
  styleUrls: ['./threat.component.css']
})
export class ThreatComponent implements OnInit {

  public codec = 'H264';
  public format = 'QUICKTIME / MOV';
  public duration = '2 SEC';
  public frameRate = '25.0';

  public timestamp = '0';
  public label = 'MACHINE';
  public confidence = '98.9598549';
  public instances = '';

  constructor() { }

  ngOnInit(): void {
  }

}
