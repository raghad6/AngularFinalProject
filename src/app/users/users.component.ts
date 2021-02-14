import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../services/users.service';
import { Router } from '@angular/router';

interface user {
  $key: string;
  name: string;
  email: string;
  role: string;
  status: string;
  crdate:Date;
  img: ImageData;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  p: number = 1;                 
  user: User[] = [];                 
  hideWhenNoUser: boolean = false; 
  noData: boolean = false;          
  term: string = '';


  constructor(private userApi: UsersService,
    private router : Router) {
      this.user = [];
     }

    ngOnInit() {
      this.dataState(); 
      let s = this.userApi.GetUsersList(); 
      s.snapshotChanges().subscribe(data => { 
        this.user = [];
        data.forEach(item => {
          let a = item.payload.toJSON(); 
          a = item.key;
          // a['$key'] = item.key;    \\this line should fetch metadata from firebase but there's an error accured don't know why , it was working !!:()
          this.user.push(a as User);
        })
      })
      // return  this.userApi.GetUsersList();

    }
  
 
  dataState() {     
    this.userApi.GetUsersList().valueChanges().subscribe(data => {
      
      if(data.length <= 0){
        this.hideWhenNoUser = false;
        this.noData = true;
      } else {
        this.hideWhenNoUser= true;
        this.noData = false;
      }
    })
  }

   deleteUser(user:any) {
    if (window.confirm('Are sure you want to delete this User ?')) { 
      this.userApi.DeleteUser(user.$key) 
    }
  }

  Open() {
    this.router.navigate(['/edit']);
}
}
