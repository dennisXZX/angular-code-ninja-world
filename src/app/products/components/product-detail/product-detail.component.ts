import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
  }

  ngOnInit () {
    const param = this.route.snapshot.paramMap.get('id');

    if (param) {
      const id = parseInt(param, 10);
      this.getProduct(id);
    }
  }

  getProduct (id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack (): void {
    this.router.navigate(['/products']);
  }

}
