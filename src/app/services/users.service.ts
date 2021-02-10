import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
export interface User {
    $key: string;
    name: string;
    email: string;
    role: string;
    status: string
    crdate: Number;
 }
@Injectable({
  providedIn: 'root'
})
export class UsersService {



  usersRef!: AngularFireList<any>; // Reference to User data list, its an Observable
    // Reference to User data list, its an Observable
  userRef!: AngularFireObject<any>;   // Reference to User object, its an Observable too

  
  constructor(private db: AngularFireDatabase) { }

    // Create User
  AddUser(user: User) {
    this.db.list('/user').push({
      name: user.name,
      email: user.email,
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
