import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebuttons',
  templateUrl: './sidebuttons.component.html',
  styleUrls: ['./sidebuttons.component.css']
})
export class SidebuttonsComponent implements OnInit {
  currentPg: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  getPg(): number {
    return this.currentPg;
  }

  setPg(pg: number) {
    this.currentPg = pg;
  }
}
