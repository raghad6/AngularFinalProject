import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {UsersComponent} from './users/users.component';
import {AddUserComponent} from './add-user/add-user.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
const routes: Routes = [
    {path: "" , component: HomeComponent},
  {path: "home" , component: HomeComponent},
  {path: "users" , component:UsersComponent},
  {path: "about" , component:AboutComponent},
  {path: "adduser" , component:AddUserComponent},
  {path: "edit" , component:EditUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
