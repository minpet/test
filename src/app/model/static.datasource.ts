import {Injectable} from '@angular/core';
import {Product} from "./product.model";
import {Observable, from} from "rxjs";
import {Order} from './order.model';

@Injectable()
export class StaticDataSource {
 private products: Product[] = [
  new Product(1,'product1', 'category1', 'descrption1', 100),
  new Product(2,'product2', 'category2', 'descrption1', 200),
  new Product(3,'product3', 'category3', 'descrption1', 300),
  new Product(4,'product3', 'category3', 'descrption1', 300),
  new Product(5,'product3', 'category3', 'descrption1', 300),
  new Product(6,'product3', 'category3', 'descrption1', 300)
 ];

 getProducts(): Observable<Product[]>{
   return from([this.products])
 }

 saveOrder(order: Order): Observable<Order>{
  console.log(JSON.stringify(order));
  return from([order]);
 }
}
