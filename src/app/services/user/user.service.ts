import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';

import  'rxjs/add/operator/map';
import swal from 'sweetalert';
import { Router } from '@angular/router';


@Injectable()

export class UserService {

  user: User;
  token: string;

  constructor( public http: HttpClient,
               public router: Router
    ) {
    this.loadStorage();
  }

  isLog() {
    return (this.token.length > 1 ) ? true : false;
  }

  loadStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null ;
    }
  }

  saveStorage(token: string, user: User) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.user = user;
    this.token = token;
  }

  logoutUser(){
    this.user = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['/login']);

  }

  loginUser( user: User, rememberme: boolean = false ){

    if (rememberme) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICES + '/login';
    return this.http.post(url, user)
          .map( (resp:any) => {
            this.saveStorage(resp.token, resp.user[0] )
            return true;
          });
  }

  createUser( user: User ) {
    let url = URL_SERVICES + '/users';

    return this.http.post(url, user)
              .map( (resp:any)  => {
                swal('User Created', user.email, 'success');
                return resp.User;
              });
   }

}
