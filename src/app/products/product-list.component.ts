import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  errorMessage = '';
  pageTitle = 'Product List';
  listFilterWord = '';
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  get listFilter (): string {
    return this.listFilterWord;
  }

  set listFilter (value: string) {
    this.listFilterWord = value;

    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  get filterProductsCount (): number {
    return this.filteredProducts.length;
  }


  constructor (private productService: ProductService) {
  }

  performFilter (filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit (): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }
}
