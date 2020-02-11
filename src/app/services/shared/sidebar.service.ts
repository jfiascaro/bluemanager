import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Dashboard', url: '/dashboard' },
      ]
    }
  ];

  constructor() { }
}
