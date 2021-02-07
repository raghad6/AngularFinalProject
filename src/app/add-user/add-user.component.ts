import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
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



  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  get f() { return this.profileForm.controls; }

  onSubmit() {
    console.warn(this.profileForm.value);

      this.submitted = true;

      // stop here if form is invalid
      if (this.profileForm.invalid) {
          return;
      }

  }

  onReset() {
      this.submitted = false;
      this.profileForm.reset();
  }

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