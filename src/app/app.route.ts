import { RouterModule,  Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { Page404Component } from './shared/page404/page404.component';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: Page404Component }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
