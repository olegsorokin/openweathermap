import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input('currentCity') currentCity;
  @Input('currentTemperatureScale') currentTemperatureScale;
  @Input('errorMessage') errorMessage;
  @Output('updatedCity') updatedCity: EventEmitter<any> = new EventEmitter();
  @Output('updatedTemperatureScale') updatedTemperatureScale: EventEmitter<any> = new EventEmitter();

  public updatedCityHandler(cityName: string): void {
    this.updatedCity.emit(cityName);
  }

  public updatedTemperatureScaleHandler(temperatureScale: string): void {
    this.updatedTemperatureScale.emit(temperatureScale);
  }
}
