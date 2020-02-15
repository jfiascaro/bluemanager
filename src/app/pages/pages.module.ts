import { NgModule } from '@angular/core';

// Routes
import { PAGES_ROUTES } from './pages.route';

// Shared
import { SharedModule } from '../shared/shared.module';

// Modules
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';

// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        AccountSettingsComponent,
        ProfileComponent
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule
    ]

})

export class PagesModule { }
