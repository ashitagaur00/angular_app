import { Component, OnInit } from '@angular/core';

//service
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //init state/place
  place = 'Delhi';
  weatherData: any;
  isLoading = true;
  //var
  qp = {
    q: this.place,
    dt: '2022-01-14',
    lang: 'en',
    end_dt: '2022-01-17',
  };
  constructor(public weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather(this.qp);
  }

  getWeather(qp:any): any {
    this.isLoading = true;
    this.weatherService.getWeather(qp).subscribe(
      (data) => {
        console.log(data);
        this.isLoading = false;
        this.weatherData = data;
      },
      (err) => {
        this.isLoading = false;
        console.log(err);
      }
    );
  }
}
