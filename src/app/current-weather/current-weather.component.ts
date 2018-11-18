import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  public weather;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this._weatherService.getWeather().subscribe(weather => {
      this.weather = weather;
    });
    console.log(this.weather);
  }

}
