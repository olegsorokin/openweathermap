import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as lodash from 'lodash';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnChanges {
  @Input('weather') weather;
  @Input('currentTemperatureScale') currentTemperatureScale;
  public windDirection: string;
  public windSpeed: number;
  public pressure: number;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.initializeData();
  }

  private initializeData() {
    this.windDirection = this.getWindDirection(this.weather.wind.deg);
    this.pressure = Math.round(this.weather.main.pressure / 1.333);

    if (this.currentTemperatureScale === 'imperial') {
      this.windSpeed = Math.round(this.weather.wind.speed / 2.237);
    } else {
      this.windSpeed = this.weather.wind.speed;
    }
  }

  private getWindDirection(windDirection) {
    windDirection = windDirection % 360;

    if (lodash.inRange(windDirection, 0, 22.5)) {
      return 'северный';
    } else if (lodash.inRange(windDirection, 22.5, 67.5)) {
      return 'северо-восточный';
    } else if (lodash.inRange(windDirection, 67.5, 112.5)) {
      return 'восточный';
    } else if (lodash.inRange(windDirection, 112.5, 157.5)) {
      return 'юго-восточный';
    } else if (lodash.inRange(windDirection, 157.5, 202.5)) {
      return 'южный';
    } else if (lodash.inRange(windDirection, 202.5, 247.5)) {
      return 'юго-западный';
    } else if (lodash.inRange(windDirection, 247.5, 292.5)) {
      return 'западный';
    } else if (lodash.inRange(windDirection, 292.5, 337.5)) {
      return 'северо-западный';
    } if (windDirection >= 337.5) {
      return 'северный';
    }
  }

}
