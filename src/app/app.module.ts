import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { CartComponent } from './component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
