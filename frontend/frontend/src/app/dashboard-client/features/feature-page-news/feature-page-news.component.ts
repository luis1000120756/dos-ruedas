import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-feature-page-news',
  imports: [],
  templateUrl: './feature-page-news.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FeaturePageNewsComponent {}
