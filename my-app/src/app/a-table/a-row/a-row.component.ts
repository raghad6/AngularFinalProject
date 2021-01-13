import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-a-row',
  templateUrl: './a-row.component.html',
  styleUrls: ['./a-row.component.css']
})
export class ARowComponent implements OnInit {

  @Input() item : string;
  @Output() newItemEvent = new EventEmitter<string>();

  newItem:string;
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    console.log(value);
  }

 
  constructor() { }

  ngOnInit(): void {
  }

}
