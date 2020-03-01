import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {}
  authenticate(username, password) {
    // return this.httpClient
    //   .post<any>('http://localhost:8080/authenticate', { username, password })
    //   .pipe(
    //     map(userData => {
          sessionStorage.setItem('username', username);
          // let tokenStr = "Bearer " + userData.token;
          // sessionStorage.setItem("token", tokenStr);
          return username;
        // })
      // );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log('user anme is ' + user);
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
