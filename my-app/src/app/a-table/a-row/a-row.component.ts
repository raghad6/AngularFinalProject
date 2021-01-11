import { Component, Input, OnInit } from '@angular/core';
// import employees from '../a-table.component';
@Component({
  selector: 'app-a-row',
  templateUrl: './a-row.component.html',
  styleUrls: ['./a-row.component.css']
})
export class ARowComponent implements OnInit {

  @Input() employee : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
