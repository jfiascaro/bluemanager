import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/services.index';
import swal from 'sweetalert';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: User;
  uploadPicture: File;
  tmpPicture: string | ArrayBuffer;
  usuario: String = 'img1-606.jpg';
  
  constructor( public _userService: UserService ) { 
    this.user = this._userService.user;

  }

  ngOnInit() {
  }

  save( user: User ) {
    this.user.username = user.username;
    this.user.email = user.email;
  
    this._userService.updateUser(this.user).subscribe()
  }


  selectPicture( file: File  ){

    if (!file) {
      this.uploadPicture = null;
      return;
    } 

    if (file.type.indexOf('image')<0) {
      swal('Not Valid Picture','Please select an image', 'error');
      this.uploadPicture = null;
    }

    this.uploadPicture = file;


    let reader= new FileReader();
    let urlImageTmp = reader.readAsDataURL(file);
    reader.onloadend =  () => this.tmpPicture = reader.result;
  }

  changePicture() {
    this._userService.changePicture(this.uploadPicture, this.user.id );

  }

}
