import { Component, OnInit } from '@angular/core';
import { TagsModel } from '../../model/tags.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  employees: TagsModel[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@gmail.com',
      dateOfBirth: '25/10/1990',
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/nature/5.jpeg'
    },
    {
      id: 2,
      name: 'Angela',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 1231231234,
      dateOfBirth: '20/10/1970',
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/nature/2.png'
    },
    {
      id: 3,
      name: 'Bob',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'bob@gmail.com',
      dateOfBirth: '03/05/1980',
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/nature/6.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
