import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from '../../services/services.index';
import { OrganizationModel } from '../../models/organization.model';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styles: []
})
export class OrganizationsComponent implements OnInit {

  organizations: OrganizationModel[] = [];

  constructor( public _organizationService: OrganizationsService  ) { }

  ngOnInit() {
    this._organizationService.getOrganizations()
        .subscribe( (resp:any) => this.organizations = resp )
   }

}
