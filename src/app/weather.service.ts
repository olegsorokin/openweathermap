import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  private weatherApiUrl = 'http://api.openweathermap.org/data/2.5/';
  private appId = '45f4dd45e0f724512ba044c5a2caf4bc';
  private cityName = 'Omsk';
  private units = 'metric';

  constructor(private _http: HttpClient) {}

  public getWeather() {
    return this._http.get(
      this.weatherApiUrl +
      'weather?q=' + this.cityName +
      '&appid=' + this.appId +
      '&units=' + this.units
    );
  }
}
