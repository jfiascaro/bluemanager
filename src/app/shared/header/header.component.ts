import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/services.index';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  user: User;
  img: string;   /// pendiente para cambiar por la gestión de personas
  

  constructor( public _userService: UserService ) { }

  ngOnInit() {
    this.user = this._userService.user;
    this.img = 'img1-379.jpg'; /// pendiente para cambiar por la gestión de personas
  }

}
