import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Administración',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' }
        // { title: 'Organizations', url: '/organizations' }
      ]
    }
  ];

  constructor() { }
}
