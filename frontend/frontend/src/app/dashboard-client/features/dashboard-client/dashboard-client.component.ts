import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardPageLayoutComponent } from '../../pages/dashboard-page-layout/dashboard-page-layout.component';

@Component({
  selector: 'app-dashboard-client',
  imports: [DashboardPageLayoutComponent, ], // Importa RouterOutlet
  template: `
    <app-dashboard-page-layout>
    </app-dashboard-page-layout>
  `,
  styleUrl: './dashboard-client.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardClientComponent { }
