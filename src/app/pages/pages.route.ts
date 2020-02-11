import { RouterModule,  Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



const PagesRoute: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'} },
            { path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Ajustes del Sistema'} },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( PagesRoute );
