import {Component} from '@angular/core';
import {Cart} from '../model/cart.model';

@Component({
  templateUrl: 'cartDetails.component.html'
})
export class CartDetailsComponent{
  constructor(public cart: Cart){}
}
