import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  
export interface User {
    $key: string;
    name: string;
    email: string;
    avatar : ImageData;
    role: string;
    status: string;
    crdate: Date;
 }
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  [x: string]: any;



  usersRef!: AngularFireList<any>; 
  userRef!: AngularFireObject<any>;   
  
  // users: any[] = [
  //   { name: 'raghad', email: 'rr@gmail.com', role: 'Manger', status: 'In', crdate: Date.now(), img:'../assets/avatar2.png' },
  //   { name: 'f', email: 'raghad@gmail.com', role: 'Employee', status: 'In', crdate: Date.now(), img:'../assets/avatar2.png' },
  //   { name: 'gh', email: 'rr@gmail.com', role: 'Employee', status: 'OFF', crdate: Date.now(), img:'../assets/avatar2.png' },
  //   { name: 'gh', email: 'rddr@gmail.com', role: 'Employee', status: 'In', crdate: Date.now() , img:'../assets/avatar2.png'},
  // ];
  
  constructor(private db: AngularFireDatabase) { }

    // Create User
  AddUser(user: User) {
    this.db.list('/user').push({
      $key: user.$key,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      role: user.role,
      status: user.status,
      crdate: user.crdate,
    })
  }

   // Fetch Single User Object
   GetUser(id: string) {
    this.userRef = this.db.object('users-list/' + id);
    return this.userRef;
  }

  // Fetch Users List
  GetUsersList() {
    this.usersRef = this.db.list('users-list');
    return this.usersRef;
  }  

  // Update User Object
  UpdateUser(user: User) {
    this.userRef.update({
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      role: user.role,
      status: user.status,
      crdate: user.crdate,
    })
  }  

  // Delete USer Object
  DeleteUser(id: string) { 
    this.userRef = this.db.object('users-list/'+id);
    this.userRef.remove();
  }
}
