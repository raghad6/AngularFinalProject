import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name: string;
  age : number;
  id : number;
  birthday : string;

students  = [
    {id: 1, name: 'Raghad' , age: 20 , birthday :"2001-8-4"},
    {id: 2, name: 'Ahmad' , age:21 ,},
    {id: 3, name: 'Ali' ,age:27 , birthday : new Date (1998 , 5 , 20)},
  ];

 
  addstudent(){
  
   this.students.push({id : this.id , name : this.name , age : this.age , birthday:this.birthday});
   this.id = 4 ;
   this.name = "ameer";
   this.age = 22;
   this.birthday =  '';
   
   console.log(this.name , this.age);
  }
}
