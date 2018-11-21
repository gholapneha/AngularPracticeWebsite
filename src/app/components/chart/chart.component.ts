
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data } from '../../model/data';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  title = 'app';
  data: Data[];
  url = 'http://localhost:4000/results';
  month = [];
  price = [];
  chart = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [
            {
              data: this.price,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
}
