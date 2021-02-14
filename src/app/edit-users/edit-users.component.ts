import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  imageUrl: any;

  editForm = new FormGroup({

  });

  constructor(private usersApi: UsersService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.updateUserData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.usersApi.GetUser('id').valueChanges().subscribe(data => {
      this.editForm.setValue(data)
    })
  }


  get $key() {
    return this.editForm.get(' $key');
  }
  get name() {
    return this.editForm.get('name');
  }
  get email() {
    return this.editForm.get('email');
  }
  get avatar() {
    return this.editForm.get('avatar');
  }
  get role() {
    return this.editForm.get('role');
  }
  get status() {
    return this.editForm.get('status');
  }
  get crdate() {
    return this.editForm.get('crdate');
  }

  updateUserData() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      avatar: ['', [Validators.required]],
      role: ['', [Validators.required]],
      status: ['', [Validators.required]],
      crdate: ['', [Validators.required]],
    })
  }

  goBack() {
    this.location.back();
  }

  updateForm() {
    this.usersApi.UpdateUser(this.editForm.value);
    this.router.navigate(['users']);
  }

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
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

