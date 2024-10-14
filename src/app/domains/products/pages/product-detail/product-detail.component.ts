import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  
  @Input() id?: string;
  private productService = inject(ProductService);
  product = signal<Product | null>(null);

  ngOnInit() {
    if (this.id) {
      this.productService.getSingleProduct(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
        }
      })
    }
  }
}
