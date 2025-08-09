import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { Product } from '../../interfaces/productsSpareParts/products-interface-spareParts';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProductComponent {
  @Input({required: true}) product!: Product;
  ngOnInit(){

    // console.log(this.product);
  }
}
