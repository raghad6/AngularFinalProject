import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {UsersComponent} from './users/users.component';
import {AddUserComponent} from './add-user/add-user.component';
const routes: Routes = [
  {path: "home" , component: HomeComponent},
  {path: "users" , component:UsersComponent},
  {path: "about" , component:AboutComponent},
  {path: "adduser" , component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
