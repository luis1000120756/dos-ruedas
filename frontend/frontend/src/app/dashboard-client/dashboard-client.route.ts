import { Routes } from '@angular/router';
import { DashboardClientComponent } from './features/dashboard-client/dashboard-client.component';
import { authGuardGuard } from '../auth/guards/auth-guard-guard';
import { FeaturePageSparePartsComponent } from './features/feature-page-spareParts/feature-page-spareParts.component';
import { CarrouselImagesComponent } from './components/carrousel-images/carrousel-images.component';
import { FeaturePageNewsComponent } from './features/feature-page-news/feature-page-news.component';
import { FeaturePageReservationComponent } from './features/feature-page-reservation/feature-page-reservation.component';

export const dasboardClientRoute: Routes = [
  {
    path: 'dashboardCli',
    component: DashboardClientComponent,
    canActivate: [authGuardGuard],
    children: [
      {
        path: 'news',
        component: FeaturePageNewsComponent,
      },
      {
        path: 'home',
        component: CarrouselImagesComponent,
      },
      {
        path: 'spareParts',
        component: FeaturePageSparePartsComponent,
      },
       {
        path: 'reservation',
        component: FeaturePageReservationComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
