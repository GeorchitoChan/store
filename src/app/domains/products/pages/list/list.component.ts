import { Component, signal } from '@angular/core';

import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor() {
    const initproducts: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=4',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 4',
        price: 100,
        image: 'https://picsum.photos/640/640?r=26',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 5',
        price: 100,
        image: 'https://picsum.photos/640/640?r=5',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 6',
        price: 100,
        image: 'https://picsum.photos/640/640?r=24',
        creationAt: new Date().toISOString()
      }
    ];

    this.products.set(initproducts);
  }

  addToCart(product: Product) {
    this.cart.update(prevState => [...prevState, product]);
  }
}
