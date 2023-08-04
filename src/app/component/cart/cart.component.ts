import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() cartList: any[] = [];

  removeItem(event: any) {
    let name = event.target.name;

    let itemObject = this.cartList.find(o =>  o.name == name);
    console.log('itemObject = ');
    console.log(itemObject);

    let itemIndex = this.cartList.findIndex(o => o.name == name);
    // this.mainList.splice(itemIndex, itemIndex + 1);

    let newObject = itemObject;
    newObject.quantity = newObject.quantity - 1;
    // console.log('After removing: ');
    // console.log(itemObject);
    console.log('newObject = ');
    console.log(newObject);

    if (newObject.quantity == 0) {
      this.cartList.splice(itemIndex, 1);
      // this.cartList.slice(0, itemIndex).concat(itemIndex + 1);
    } else {
      this.cartList[itemIndex] = newObject;
    }

    // console.log('Final cart: ');
    // console.log(this.cartList);
  }
}
