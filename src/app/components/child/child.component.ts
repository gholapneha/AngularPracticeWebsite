import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/user.model';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public user: any;
  // tslint:disable-next-line:no-input-rename
  @Input('user') userObj: User;
  @Input() childMessageRecieve: string;

  // tslint:disable-next-line:no-inferrable-types
  isCollapse: boolean = true;
  constructor() {
  }

  ngOnInit() {
    this.user = {
      name: this.userObj.name,
      designation: this.userObj.designation,
      address: this.userObj.address,
      phone: this.userObj.phone
    };
  }

  toggleCollapse() {
    this.isCollapse = !this.isCollapse;
  }

}
