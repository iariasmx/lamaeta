import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { Products } from '../data/products';

@Component({
  selector: 'rental',
  imports: [NgFor, NgIf, NgClass],
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

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      piscina: 'from-sky-400 to-blue-600',
      rescate: 'from-orange-400 to-red-600',
      acuatico: 'from-cyan-400 to-emerald-600',
      familiar: 'from-fuchsia-400 to-pink-600'
    };
    return colors[category] || 'from-slate-400 to-slate-600';
  }

  getCategoryBadge(category: string): string {
    const colors: { [key: string]: string } = {
      piscina: 'bg-sky-100 text-sky-700 border-sky-200',
      rescate: 'bg-orange-100 text-orange-700 border-orange-200',
      acuatico: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      familiar: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200'
    };
    return colors[category] || 'bg-slate-100 text-slate-700 border-slate-200';
  }
}
