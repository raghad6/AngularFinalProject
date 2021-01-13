import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'my-app';
  color : string;
  router: any;
  enter : any;

 ngOnint(){
 }

//  getValue(enter){
//    console.log(enter , "enter");
//    return enter;
//  }

}
