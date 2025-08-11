import { CommonModule, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
@Component({
  selector: 'app-spinner-loading',
  imports: [CommonModule],
  template: `
    <div
      *ngIf="isLoading"
      class="absolute inset-0 z-50 flex justify-center items-center"
    >
      <span class="loading loading-spinner loading-xl"></span>
    </div>
  `,
  styleUrls: ['./spinnerLoading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerLoadingComponent {
  @Input() isLoading: any;
  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoading']) {
    }
  }
}
