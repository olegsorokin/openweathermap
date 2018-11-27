import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit, OnChanges {
  @Input('weather') weather;
  public currentTemperature: number;
  public weatherIcon: string;

  ngOnInit() {
    this.initializeData();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.weather = changes.weather.currentValue;
    this.initializeData();
  }

  private initializeData() {
    this.currentTemperature = Math.round(this.weather.main.temp);
    this.weatherIcon = this.getWeatherIcon(this.weather.weather[0].id);
  }

  private getWeatherIcon(weatherId) {
    const weatherGroup = Math.floor(weatherId / 100);

    if (weatherId === 800) {
      return 'sun';
    } else if (weatherGroup === 7) {
      return 'cloud';
    } else if (weatherGroup === 5 || weatherGroup === 6) {
      return 'rain';
    } else if (weatherGroup === 2 || weatherGroup === 3) {
      return 'storm';
    }

    return 'partly-cloudy';
  }
}
