import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';

@Injectable()
export class OrganizationsService {

  private url = URL_SERVICES


  constructor( public http: HttpClient ) { }
  
  // Read
  getOrganizations() {
    let url = this.url + '/organizations/list';
    return this.http.get( url )
            .map ( (resp: any) => resp.organizations );
  }

  // Read by Id
  getOrganization(id) {
    let url = this.url + '/organizations/' + id;
    return this.http.get( url )
            .map( (resp: any) => resp.organizations)
  }

}
