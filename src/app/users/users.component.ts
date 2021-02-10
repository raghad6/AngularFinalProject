import { Component, OnInit } from '@angular/core';
interface user {
  name: string;
  email: string;
  role: string;
  status: string;
  crdate:string;
}

const USERS: user[] = [
  {
    
    name: 'Russia',
    email: 'iiiiis',
    role: '17075200',
    status: '146989754',
    crdate :'8888'
  },
  {
    name: 'Canada',
    email: 'jkhjh',
    role: '9976140',
    status: '36624199',
    crdate :'0990'
  },
  {
    name: 'United States',
    email: 'jkhkk.',
    role: '9629091',
    status: '324459463',
    crdate :'09'
  },
  {
    name: 'China',
    email: 'iijjjj',
    role: '9596960',
    status: '1409517397',
    crdate :'9798'
  }
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = USERS;

  constructor() { }

  ngOnInit(): void {
  }

  
}
