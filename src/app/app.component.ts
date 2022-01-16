import { Component, OnInit } from '@angular/core';
// import { InfoToolTipComponent } from './components/info-tool-tip/info-tool-tip.component';
//service
import { WeatherService } from './weather.service';

import { currentDate} from './shared/utils';

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
    dt: currentDate,
    lang: 'en',
    end_dt: currentDate,
    // dt: '2022-01-14',
    // lang: 'en',
    // end_dt: '2022-01-17',
  };

  //tooltip
  showTooltip = false;
  pageXY = [0, 0];

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather(this.qp);
  }

  // set place keyup
  setPlace = (e:any):any =>{
    console.log(e.target.value);
  }

  

  // get weather fn
  getWeather(qp: any): any {
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

  // emit the range date data to call api

  dateRangeChange = (e: string[]) =>{
    console.log(e);
    this.qp = {...this.qp, dt:e[0], end_dt:e[1]};
    this.getWeather(this.qp);
  }


  //show tooltip fn

  showTooltipFn = (e:any): void => {
    //we want to show the tooltip on the left side of the icon
    //so we need grab the mouse position when we hover on the icon
    // console.log(e.pageX,e.pageY);
    this.pageXY = [e.pageX - 450, e.pageY- 100];
    this.showTooltip = true;
  }

}
