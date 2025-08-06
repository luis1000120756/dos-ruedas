import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-page-layout',
  imports: [NavBarComponent, FooterComponent, RouterOutlet],
  templateUrl: './dashboard-page-layout.component.html',
  styleUrl: './dashboard-page-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageLayoutComponent { }
