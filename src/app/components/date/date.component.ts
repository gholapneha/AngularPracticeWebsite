import { Component, OnInit, Input } from '@angular/core';
import { userInfo } from 'os';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {



  public dateMessage: string;
  constructor() {
    setInterval(() => {
      const currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    } , 1000);
   }

  ngOnInit() {

  }

}
