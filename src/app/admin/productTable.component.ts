import {Component} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductRepository} from '../model/product.repository';

@Component({
   templateUrl: './productTable.component.html'
})
export class ProductTableComponent{
   constructor(private repo: ProductRepository){}

   getProducts(): Product[]{
     return this.repo.getProducts();
   }

   deleteProduct(id: number){
      this.repo.deleteProduct(id);
   }
}
