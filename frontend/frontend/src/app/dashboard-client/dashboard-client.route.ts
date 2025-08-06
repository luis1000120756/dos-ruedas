import { Routes } from '@angular/router';
import { DashboardClientComponent } from './features/dashboard-client/dashboard-client.component';
import { authGuardGuard } from '../auth/guards/auth-guard-guard';
import { FeaturePageReservationComponent } from './features/feature-page-reservation/feature-page-reservation.component';
import { FeaturePageSparePartsComponent } from './features/feature-page-spareParts/feature-page-spareParts.component';
import { FeaturePageNewsComponent } from './features/feature-page-news/feature-page-news.component';
import { CarrouselImagesComponent } from './components/carrousel-images/carrousel-images.component';

export const dasboardClientRoute: Routes = [
  {
    path: 'dashboardCli',
    component: DashboardClientComponent,
    canActivate: [authGuardGuard],
    children: [
      {
        path: 'home',
        component: CarrouselImagesComponent,
      },
      {
        path: 'reservations',
        component: FeaturePageReservationComponent,
      },
      {
        path: 'spareParts',
        component: FeaturePageSparePartsComponent,
      },
      {
        path: 'news',
        component: FeaturePageNewsComponent,
      },
      {
        path: '',
        redirectTo: 'dashboardCli',
        pathMatch: 'full',
      },
    ],
  },
];
