import { Routes } from '@angular/router';
import { DashboardClientComponent } from './components/dashboard-client/dashboard-client.component';
import { authGuardGuard } from '../auth/guards/auth-guard-guard';

export const dasboardClientRoute: Routes = [{
    path: 'dashboardCli',
    component: DashboardClientComponent,
    canActivate: [authGuardGuard]
}];
