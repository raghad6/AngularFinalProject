import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-table',
  templateUrl: './a-table.component.html',
  styleUrls: ['./a-table.component.css']
})
export class ATableComponent implements OnInit {

  MyItems = "My items List :";
  
  items=[
     '1' ,
     '2',
     '3'
  ]

  addItem(newItem: string) {
    if((!this.items.includes(newItem ) && (newItem))){
      this.items.push(newItem);

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
