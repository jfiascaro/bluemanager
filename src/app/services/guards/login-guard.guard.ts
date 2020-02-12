import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';


@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor( public _userService: UserService, 
               public router: Router      
    ) {}

  canActivate() {

    if ( this._userService.isLog()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
