import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf_workshop31';

  mainList: any[] = [];

  addItem(newItem: any) {
    console.log('App received item from Output(): ');
    console.log(newItem);

    if (newItem.quantity == undefined) {
      newItem.quantity = 1;
    } else {
      newItem.quantity += 1;
    }

    let itemIndex = this.mainList.findIndex(o => o.name == newItem.name);
    // this.mainList.splice(itemIndex, itemIndex + 1);

    if (itemIndex == -1) {
      this.mainList.push(newItem);
    } else {
      this.mainList[itemIndex] = newItem;
    }

  }
}
