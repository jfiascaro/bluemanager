import { NgModule } from '@angular/core';

// Routes
import { PAGES_ROUTES } from './pages.route';

// Shared
import { SharedModule } from '../shared/shared.module';

// Modules
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        AccountSettingsComponent
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
