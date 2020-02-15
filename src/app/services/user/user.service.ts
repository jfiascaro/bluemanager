import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';

import  'rxjs/add/operator/map';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { UploadFileService } from '../upload-files/upload-file.service';


@Injectable()

export class UserService {

  user: User;
  token: string;

  constructor( public http: HttpClient,
               public router: Router,
               public _uploadFileService: UploadFileService
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
            this.saveStorage(resp.token, resp.user[0] );
            console.log(resp.user[0]);
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

   updateUser(user:User) {
     let url = URL_SERVICES + '/users/' + user.id;
     // url += '?token=' + this.token;

     return this.http.put(url, user)
          .map ((resp:any) => {
              //this.user = resp.users;
              this.saveStorage(this.token, resp.users);
              swal('Profile updated', user.username, 'success' );
              return true;
          })
   }


   changePicture( file: File, id: number ){

    this._uploadFileService.uploadFile(file, 'people', id)
        .then( (resp: any) => {
          console.log(resp);
          //this.user.img = resp.user.img
          swal('Photo Updated', this.user.username, 'success');
          this.saveStorage(this.token, this.user);
        })
        .catch( resp => {
          console.log(resp);
        })
   }
}
