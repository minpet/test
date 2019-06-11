import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ModelModule} from "../model/model.module"
import {StoreComponent} from "./store.component"
import { CounterDirective} from './counter.directive';
import {CartSummaryComponent} from "./cartSummary.component";
import {CartDetailsComponent} from './cartDetails.component';
import {CheckoutComponent} from './checkout.component';
import {RouterModule} from '@angular/router';

@NgModule({
   imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
   declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailsComponent, CheckoutComponent],
   exports: [StoreComponent, CartDetailsComponent, CheckoutComponent]
})
export class StoreModule{}
