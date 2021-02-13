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
  // user: any[] = this.userApi.users;

  constructor(private userApi: UsersService,
    private router : Router) { }

    ngOnInit() {
      this.dataState(); 
      let s = this.userApi.GetUsersList(); 
      s.snapshotChanges().subscribe(data => { 
        this.user = [];
        data.forEach(item => {
          let a = item.payload.toJSON(); 
          // a['$Key'] = item.key;
          this.user.push(a as User);
        })
      })
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
