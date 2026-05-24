import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  image: string;
  available: boolean;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class Products {
  products: Product[] = [
    {
      id: 1,
      name: 'Inflable de Piscina Familiar',
      description: 'Inflable grande para toda la familia con tema de jungla',
      price: 45,
      capacity: 6,
      image: 'https://images.unsplash.com/photo-1595266077375-7b51c3a09ece?ixlib=rb-4.0.3&auto=fix(auto&w=100&h=100&q=80)',
      available: true,
      category: 'piscina'
    },
    {
      id: 2,
      name: 'Inflable de Rescate',
      description: 'Inflable de rescate profesional con licencia oficial',
      price: 65,
      capacity: 2,
      image: 'https://images.unsplash.com/photo-1598507522316-980ff1f369d8?ixlib=rb-4.0.3&auto=fix(auto&w=100&h=100&q=80)',
      available: true,
      category: 'rescate'
    },
    {
      id: 3,
      name: 'Inflable Acuático Portal',
      description: 'Inflable clínico con camilla y contigo para aventuras acuáticas',
      price: 85,
      capacity: 1,
      image: 'https://images.unsplash.com/photo-1626377225398-dd90dc55a8fd?ixlib=rb-4.0.3&auto=fix(auto&w=100&h=100&q=80)',
      available: false,
      category: 'acuatico'
    },
    {
      id: 4,
      name: 'Inflable Familiar Zen',
      description: 'Inflable de 6 personas con diseño zen y colores relajantes',
      price: 55,
      capacity: 6,
      image: 'https://images.unsplash.com/photo-1587612239267-846f4bc7d3cb?ixlib=rb-4.0.3&auto=fix(auto&w=100&h=100&q=80)',
      available: true,
      category: 'familiar'
    }
  ];

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
