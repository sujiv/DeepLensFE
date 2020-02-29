import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main-zones',
  templateUrl: './main-zones.component.html',
  styleUrls: ['./main-zones.component.css']
})
export class MainZonesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
