import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-feature-page-news',
  imports: [],
  template: `<p>feature-page-news works!</p>`,
  styleUrl: './feature-page-news.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePageNewsComponent { }
