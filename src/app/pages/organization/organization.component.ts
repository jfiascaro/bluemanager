import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { OrganizationModel } from '../../models/organization.model';
import { OrganizationsService } from '../../services/services.index';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styles: []
})
export class OrganizationComponent implements OnInit {

  form: FormGroup;

  constructor( 
    public _organizationService: OrganizationsService,
    public router: Router  
    ) { }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl( null, Validators.required ),
      email: new FormControl( null, [Validators.required, Validators.email] ),
      url: new FormControl( null, Validators.required ),
      logo: new FormControl( null )
    } );

  }


  createOrganization() {
    let org:  OrganizationModel = {
      name: this.form.value.name,
      email: this.form.value.email,
      url: this.form.value.url,
      logo: this.form.value.logo
    }

    this._organizationService.createOrganization(org)
           .subscribe ( (resp:any) => {
             console.log(resp);
             swal('Success','Organization Created', 'success');
             this.router.navigate(['/organizations']);
          } );  


  }


}
