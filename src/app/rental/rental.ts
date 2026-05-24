import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Products } from '../data/products';

@Component({
  selector: 'rental',
  imports: [NgFor],
  templateUrl: './rental.html',
  styleUrls: ['./rental.css']
})
export class RentalComponent {
  products: any[] = [];
  whatsappPhone = '+525534004082'; // Cambia este número por tu número de WhatsApp real

  constructor(private productsService: Products) {
    this.products = this.productsService.products;
  }

  getWhatsappUrl(product: any) {
    const message = `Hola, quiero reservar el inflable: ${product.name}.\nDescripción: ${product.description}.\n¿Está disponible para mi fecha?`;
    return `https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent(message)}`;
  }

  trackByProduct(index: number, product: any) {
    return product.id;
  }
}
