import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {
  private weatherApiUrl = 'http://api.openweathermap.org/data/2.5/';
  private appId = '45f4dd45e0f724512ba044c5a2caf4bc';

  public cityName: string;
  public units: string;
  public lang: string;

  constructor(private _http: HttpClient) {
    this.cityName = 'Москва';
    this.units = 'metric';
    this.lang = 'ru';
  }

  public getWeather(cityName, units?, lang?) {
    if (!cityName) {
      cityName = this.cityName;
    }
    if (!units) {
      units = this.units;
    }
    if (!lang) {
      lang = this.lang;
    }

    return this._http.get(
      this.weatherApiUrl +
      'weather?q=' + cityName +
      '&appid=' + this.appId +
      '&units=' + units +
      '&lang=' + lang
    );
  }
}
