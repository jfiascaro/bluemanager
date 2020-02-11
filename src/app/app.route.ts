import { RouterModule,  Routes } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphsComponent } from './pages/graphs/graphs.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
    {   
        path: '', 
        component: PagesComponent, 
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graphs', component: GraphsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }
    
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
