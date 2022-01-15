import { Component, OnInit } from '@angular/core';

//service
import {WeatherService} from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public weatherService :WeatherService
  ){}
  
  ngOnInit(): void{}

  getWeather() :any{
    this.weatherService.getWeather().subscribe(
      data=>{
        console.log(data);
      },err =>{
        console.log(err);
      }
    );
  }

}
