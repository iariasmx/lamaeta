import { Component } from '@angular/core';
import { Products } from '../data/products';

@Component({
  selector: 'rental',
  imports: [],
  templateUrl: './rental.html',
  styleUrls: ['./rental.css']
})
export class RentalComponent {
  products: any[] = [];

  constructor(private productsService: Products) {
    this.products = this.productsService.products;
  }

  reserveProduct(product: any) {
    if (product.available) {
      product.available = false;
      alert(`Has reservado el ${product.name}!`);
    } else {
      alert('Este producto ya no está disponible');
    }
  }
}
