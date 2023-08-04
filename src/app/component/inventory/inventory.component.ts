import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventoryList: [{ name: String, img: String }] =
    [{ name: 'Pencil', img: 'https://clipart-library.com/img1/1573718.png'}];

  ngOnInit() {
    this.inventoryList.push({ name: 'Eraser', img: 'https://clipart-library.com/images/pTo5AXR9c.jpg'});
    this.inventoryList.push({ name: 'Ruler', img: 'https://clipart-library.com/images/piq8Bdk5T.png'});
    this.inventoryList.push({ name: 'Notebook', img: 'https://clipart-library.com/data_images/145945.png'});
  }

  @Output() itemOutput: EventEmitter<{ name: String, img: String }> = new EventEmitter();

  addItem(event: any) {
    // console.log('button pressed');
    // console.log(event.target.name);
    let name = event.target.name;
    let itemObject = this.inventoryList.find(o =>  o.name == name);
    // console.log(itemObject);

    this.itemOutput.emit(itemObject);
  }
}
