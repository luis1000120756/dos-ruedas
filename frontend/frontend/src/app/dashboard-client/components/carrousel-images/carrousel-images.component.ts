import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicationMapComponent } from '../ubication-map/ubication-map.component';

@Component({
  selector: 'app-carrousel-images',
  imports: [CommonModule, UbicationMapComponent],
  templateUrl: './carrousel-images.component.html',
  styleUrl: './carrousel-images.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CarrouselImagesComponent implements OnInit, OnDestroy {
  constructor(private cdr: ChangeDetectorRef) {}

  images: string[] = [
    '/assets/img/motorcycle-3413907_1280.png',
    '/assets/img/image2-login.jpg',
    '/assets/img/image-login.jpg',
    '/assets/img/motorcycle-6580243_1280.jpg',
    '/assets/img/image2-login.jpg',
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => this.nextImage(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.cdr.detectChanges();
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }
  
}
