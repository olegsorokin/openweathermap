import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public weather;
  public currentCity: string;
  public currentTemperatureScale: string;

  constructor(private _weatherService: WeatherService) {
    this.currentCity = 'Москва';
    this.currentTemperatureScale = 'metric';

    this.getWeatherOnCityChange(this.currentCity, this.currentTemperatureScale);
  }

  ngOnInit(): void {}


  private getWeatherOnCityChange(city: string, units: string): void {
    this._weatherService.getWeather(city, units)
      .subscribe((weather) => {
        this.weather = weather;
        console.log(this.weather);
      });
  }

  public updatedCityHandler(cityName: string): void {
    this.currentCity = cityName;

    this.getWeatherOnCityChange(cityName, this.currentTemperatureScale);
  }

  public updatedTemperatureScaleHandler(units: string): void {
    this.currentTemperatureScale = units;

    this.getWeatherOnCityChange(this.currentCity, units);
  }
}
