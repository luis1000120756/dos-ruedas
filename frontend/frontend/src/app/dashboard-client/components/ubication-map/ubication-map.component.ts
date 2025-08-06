import { Component, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-ubication-map',
  templateUrl: './ubication-map.component.html',
  styleUrls: ['./ubication-map.component.css']
})
export class UbicationMapComponent implements AfterViewInit {
  map!: mapboxgl.Map;
  userInteracting = false;
  spinEnabled = true;

  ngAfterViewInit(): void {
    (mapboxgl as any).accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // ⬅ Reemplaza con tu token

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      projection: 'globe',
      zoom: 1,
      center: [30, 15]
    });

    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.scrollZoom.disable();

    this.map.on('style.load', () => {
      this.map.setFog({});
    });

    this.map.on('mousedown', () => {
      this.userInteracting = true;
    });

    this.map.on('dragstart', () => {
      this.userInteracting = true;
    });

    this.map.on('moveend', () => {
      this.spinGlobe();
    });

    this.spinGlobe();
  }

  private spinGlobe() {
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;
    const secondsPerRevolution = 240;

    const zoom = this.map.getZoom();
    if (this.spinEnabled && !this.userInteracting && zoom < maxSpinZoom) {
      let distancePerSecond = 360 / secondsPerRevolution;
      if (zoom > slowSpinZoom) {
        const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
        distancePerSecond *= zoomDif;
      }
      const center = this.map.getCenter();
      center.lng -= distancePerSecond;

      this.map.easeTo({
        center,
        duration: 1000,
        easing: (n) => n
      });
    }
  }
}
