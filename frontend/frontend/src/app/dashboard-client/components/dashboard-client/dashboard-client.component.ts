import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-client',
  imports: [],
  template: `<p>Bienvenido Luis</p>`,
  styleUrl: './dashboard-client.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardClientComponent { }
