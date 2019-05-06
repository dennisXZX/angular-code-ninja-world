import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor (private router: Router) {
  }

  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const id = parseInt(next.url[1].path, 10);

    // return to product list page if the id is not a valid number or less than 0
    if (isNaN(id) || id < 1) {
      console.log('Invalid product Id');
      this.router.navigate(['/products']);
      return false;
    }

    return true;
  }
}
