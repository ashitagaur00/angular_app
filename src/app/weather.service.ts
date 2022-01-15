import { Injectable } from '@angular/core';

//angular http client
import { HttpClient } from '@angular/common/http';
//Observable
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
// angular 11+ is not compatible with latest rxjs 7 version
//  npm i rxjs@6.3.3
import { throwError } from 'rxjs';

// enviorment
import { environment } from '../environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
const API_HOST = environment.API_HOST;

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  //get weather
  getWeather(): Observable<any> {
    // ...using get request
    return this.httpClient
      .get<any>('${API_URL}history.json', {
        params: {
          q: 'Tonk',
          dt: '2022-01-14',
          lang: 'en',
          end_dt: '2022-01-17',
        }, //static for now
        headers: {
          'x-rapidapi-host': API_HOST,
          'x-rapidapi-key': API_KEY,
        },
      })
      .pipe(catchError(this.errorHandle));
    // return response;
  }
  errorHandle(error: any): any {
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) {
      //get client side error
      errorMsg = error;
    } else {
      //get server side error
      errorMsg = error;
    }
    return throwError(errorMsg);
  }
}
