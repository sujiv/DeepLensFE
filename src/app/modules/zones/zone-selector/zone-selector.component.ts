import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-selector',
  templateUrl: './zone-selector.component.html',
  styleUrls: ['./zone-selector.component.css']
})
export class ZoneSelectorComponent implements OnInit {
  title: string = "Chennai Vehicle & Engine Assembly Plant";

  constructor() { }

  ngOnInit(): void {
  }

}
