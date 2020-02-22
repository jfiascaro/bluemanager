import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { OrganizationModel } from 'src/app/models/organization.model';
import { map } from 'rxjs/operators';

@Injectable()
export class OrganizationsService {

  private url = URL_SERVICES


  constructor( public http: HttpClient ) { }
  
  // Create
  // createOrganization(organization: OrganizationModel) {
  //   let url = this.url + '/organizations';
  //   return this.http.post( url, organization)
  //                 .map ( (resp: any) => {
  //                   organization.id = resp.organizations.id;
  //                   return organization;
  //                 })
  // }

  createOrganization(organization: OrganizationModel) {
    return this.http.post(`${this.url}/organizations`, organization)
                  .pipe(
                    map( (resp:any) => {
                      organization.id = resp.organizations.id;
                      return organization;
                    })
                  );
  }




  // Read
  getOrganizations() {
    let url = this.url + '/organizations/list';
    return this.http.get( url )
            .map ( (resp: any) => resp.organizations );
  }

  // Read by Id
  getOrganization(id: number) {
    let url = this.url + '/organizations/' + id;
    return this.http.get( url )
            .map( (resp: any) => resp.organizations)
  }



}
