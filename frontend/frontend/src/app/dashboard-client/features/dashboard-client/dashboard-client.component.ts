import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardPageLayoutComponent } from '../../pages/dashboard-page-layout/dashboard-page-layout.component';
import { AuthService } from '../../../auth/services/auth.service';
import { Route, Router, RouterOutlet } from '@angular/router';
import { CarrouselImagesComponent } from '../../components/carrousel-images/carrousel-images.component';

@Component({
  selector: 'app-dashboard-client',
  imports: [DashboardPageLayoutComponent],
  template: `<app-dashboard-page-layout></app-dashboard-page-layout>`,
  styleUrl: './dashboard-client.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardClientComponent {}
