import { NgModule } from "@angular/core";
import { PAGES_ROUTES } from './pages.route';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphsComponent } from './graphs/graphs.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraphsComponent
    ], 
    exports: [
        DashboardComponent,
        ProgressComponent,
        GraphsComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]

})

export class PagesModule { }