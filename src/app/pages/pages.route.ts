import { RouterModule,  Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfileComponent } from './profile/profile.component';

// Guards
import { LoginGuardGuard } from '../services/guards/login-guard.guard';



const PagesRoute: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'} },
            { path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Ajustes del Sistema'} },
            { path: 'profile', component: ProfileComponent, data: {title: 'Perfil del usuario'} },

            { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( PagesRoute );
