import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.route';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ChartsModule } from 'ng2-charts';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]

})

export class PagesModule { }
