import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UserService } from '../services/services.index';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    public _userService: UserService,
    public router: Router 
  ) { }

  validateEquals (f1: string, f2: string) {
    return (group: FormGroup) =>{
      
      let field1 = group.controls[f1].value;
      let field2 = group.controls[f2].value;
      
      if (field1 === field2) {
        return null;
      }

      return {
        validateEquals: true
      };
    };
  }

  ngOnInit() {
    init_plugins();

    this.form = new FormGroup({
      name: new FormControl( null, Validators.required ),
      email: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl( null, Validators.required),
      confirmp: new FormControl( null, Validators.required),
      terms: new FormControl( false ),
    }, { validators: this.validateEquals('password', 'confirmp' ) } );


    this.form.setValue({
      name: 'José Fiascaro',
      email: 'jfiascaro@gmail.com',
      password: '123456',
      confirmp: '123456',
      terms: true
    });
  }


  CreateUser() {
    if (this.form.invalid) {
      return;
    }

    if (!this.form.value.terms) {
      swal('Warning','You must accepts the terms', 'warning');
      return;
    }

    let user = new User(
      1,
      this.form.value.name,
      this.form.value.email,
      this.form.value.password
    )

    this._userService.createUser(user)
        .subscribe( resp => this.router.navigate(['/login']));

  }


}
