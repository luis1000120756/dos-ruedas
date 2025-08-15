import { Routes } from '@angular/router';
import { authRoute } from './auth/auth.route';
import { dasboardClientRoute } from './dashboard-client/dashboard-client.route';
import { FeaturePageNewsComponent } from './dashboard-client/features/feature-page-news/feature-page-news.component';
export const routes: Routes = [
  ...authRoute, // login, register
  ...dasboardClientRoute, // dashboardCli
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
