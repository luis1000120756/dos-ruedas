import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { ProductSparePartsService } from '../../services/servicesProductsSpareParts/service-product-spareParts.service';
import { CommonModule } from '@angular/common';
import { SpinnerLoadingComponent } from '../../components/spinnerLoading/spinnerLoading.component';

@Component({
  selector: 'app-feature-page-spare-parts',
  imports: [CardProductComponent, CommonModule, SpinnerLoadingComponent],
  templateUrl: './feature-page-spareParts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePageSparePartsComponent {
  isLoading = true;
  products: any[] = [];

  constructor(
    private productService: ProductSparePartsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data.listProducts;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al obtener productos', error);
        this.cdr.detectChanges();
      },
    });
  }
}
