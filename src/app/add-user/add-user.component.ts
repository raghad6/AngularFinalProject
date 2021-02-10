import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  submitted = false;
  imageUrl:any;

  profileForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    avatar: new FormControl('',[Validators.required]),
    role: new FormControl('' ,[Validators.required]),
    status: new FormControl('' ,[Validators.required]),
  });



  constructor(private router : Router,
    public usersApi: UsersService,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.usersApi.GetUsersList(); 
  }

  // Reactive student form
  studenForm() {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      avatar: new FormControl('',[Validators.required]),
      role: new FormControl('' ,[Validators.required]),
      status: new FormControl('' ,[Validators.required]),
        })  
  }

   // Accessing form control using getters
   get name() {
    return this.profileForm.get('name');
  }

  get email() {
    return this.profileForm.get('email');
  }  

  get avatar() {
    return this.profileForm.get('avatar');
  }

  get role() {
    return this.profileForm.get('role');
  }

  
  get status() {
    return this.profileForm.get('status');
  }

  // Reset student form's values
  ResetForm() {
    this.profileForm.reset();
  }  
 
  // submitUserData() {
  //   this.usersApi.AddUser(this.profileForm.value); // Submit student data using CRUD API
  //     // Reset form when clicked on reset button
  //  };


  get f() { return this.profileForm.controls; }

  onSubmit() {

    console.warn(this.profileForm.value);

      this.submitted = true;

      // stop here if form is invalid
      if (this.profileForm.invalid) {
        this.usersApi.AddUser(this.profileForm.value); // Submit student data using CRUD API
        this.ResetForm();
      }

  }

  // onReset() {
  //     this.submitted = false;
  //     this.profileForm.reset();
  // }

  selectFile(event : any) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			return;
		}

		var mimeType = event.target.files[0].type;

		if (mimeType.match(/image\/*/) == null) {
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.imageUrl = reader.result; 
		}
  }



}