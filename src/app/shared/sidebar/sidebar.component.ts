import { Component, OnInit } from '@angular/core';
import { SidebarService, UserService } from 'src/app/services/services.index';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  user: User;
  img: string;   /// pendiente para cambiar por la gestión de personas

  constructor( public _sidebar: SidebarService,
               public _userService: UserService
    ) { }

  ngOnInit() {
    this.user = this._userService.user;
    this.img = 'img1-379.jpg'; /// pendiente para cambiar por la gestión de personas
  }

}
