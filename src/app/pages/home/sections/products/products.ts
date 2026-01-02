import { Component } from '@angular/core';
import { NgFor, DecimalPipe } from '@angular/common';
import { ProductReserveTab, ReserveProduct } from './product-reserve-tab/product-reserve-tab';

type ProductCard = {
  title: string;
  img: string;
  oldPrice: number;
  newPrice: number;
};

@Component({
  selector: 'products-section',
  standalone: true,
  imports: [NgFor, DecimalPipe , ProductReserveTab ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class ProductsSection {
  
  products: ProductCard[] = [
    {
      title: 'First Signature 50ml',
      img: 'assets/images/p50v2.png',
      oldPrice: 1916,
      newPrice: 479,
    },
    {
      title: 'First Signature 100ml',
      img: 'assets/images/p100v2.png',
      oldPrice: 3116,
      newPrice: 779,
    },

  ];

    tabOpen = false;
  selected?: ReserveProduct;

  openTab(p: ProductCard): void {
    this.selected = { title: p.title, price: p.newPrice, img: p.img };
    this.tabOpen = true;

    setTimeout(() => {
      document.getElementById('reserve-tab')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

  }
  

   closeTab(): void {
    this.tabOpen = false;
    this.selected = undefined;
  }

}
