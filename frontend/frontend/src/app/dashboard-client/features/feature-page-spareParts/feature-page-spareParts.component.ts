import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardProductComponent } from "../../components/card-product/card-product.component";

@Component({
  selector: 'app-feature-page-spare-parts',
  imports: [CardProductComponent],
  templateUrl: './feature-page-spareParts.component.html',
  styleUrl: './feature-page-spareParts.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePageSparePartsComponent { }
