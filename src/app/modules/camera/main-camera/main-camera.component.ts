import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-main-camera',
  templateUrl: './main-camera.component.html',
  styleUrls: ['./main-camera.component.css']
})
export class MainCameraComponent implements OnInit {

  constructor(  public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
