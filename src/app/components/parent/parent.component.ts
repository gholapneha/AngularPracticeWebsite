import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public user: User;
  public response;
  username = "Neha";
  // tslint:disable-next-line:no-inferrable-types
  // public parentMessage = "Neha";

  constructor(private http: HttpClient) {
    this.user = new User();
    this.user.name = 'GridEdge';
    this.user.designation = 'Software Engineer';
    this.user.address = 'Pune';
    this.user.phone = [
      '123-123-1234',
      '123-234-3456'
    ];
  }

  ngOnInit() {
    // let test = this.http.get('https://api.github.com/users/koushikkothagal');
    //  this.response = test.subscribe(
    //    (response) => {
    //      console.log("API RESPONSE:", response);
    //    }
    //  );
  }

  search() {
    this.http.get('https://api.github.com/users/' + this.username).subscribe(
      (response) => {
        this.response = response;
        console.log('API RESPONSE:', response);
      }
    );
  }

}
