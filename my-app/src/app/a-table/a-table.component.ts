import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-table',
  templateUrl: './a-table.component.html',
  styleUrls: ['./a-table.component.css']
})
export class ATableComponent implements OnInit {

  employees  = [
    {
      name : 'Raghad' , 
      age: '20' ,
      email : 'Raghad@gmail.com' ,
      mobile : '000'
    },
    {
     name : 'Ahmad' , 
      age : '33' ,
      email : 'Ahmad12@gmail.com' ,
      mobile : '2020' 
    },
    {
     name : 'Ameer' , 
     age : '25' ,
     email : 'Ameer@gmail.com' ,
     company : 'myCompany'
    }
   ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
