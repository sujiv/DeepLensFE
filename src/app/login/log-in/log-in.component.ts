import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  username = '';
  password = '';
  invalidLogin = false;
  constructor(private router: Router,
              private loginservice: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  signIn() {

    this.loginservice.authenticate(this.username, this.password)
        // .subscribe(
        // data => {
    this.router.navigate([''])
    this.invalidLogin = false;
        // },
        // error => {
        //   this.invalidLogin = true
        //   this.error = error.message;
        //
        // }

  }
}
