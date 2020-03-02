import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-sidebuttons',
  templateUrl: './sidebuttons.component.html',
  styleUrls: ['./sidebuttons.component.css']
})
export class SidebuttonsComponent implements OnInit {
  currentPg: number = 0;

  constructor(public loginService: AuthenticationService) { }

  ngOnInit(): void {
  }

  getPg(): number {
    return this.currentPg;

    alert(sessionStorage.getItem('username'));
  }

  setPg(pg: number) {
    this.currentPg = pg;
  }
}
