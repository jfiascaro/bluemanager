import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Administración',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Organizations', url: '/organizations' },
        { title: 'Areas', url: '/organizations' },
        { title: 'People', url: '/organizations' },
        { title: 'Users', url: '/organizations' }
      ]
    },
    {
      title: 'Process Management',
      icon: 'mdi mdi-arrange-send-to-back',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Organizations', url: '/organizations' },
        { title: 'Areas', url: '/organizations' },
        { title: 'People', url: '/organizations' },
        { title: 'Users', url: '/organizations' }
      ]
    }
  ];

  constructor() { }
}
