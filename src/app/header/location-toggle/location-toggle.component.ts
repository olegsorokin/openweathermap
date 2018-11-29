import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';
import { IGeolocationResult } from './geolocation-result.interface';

@Component({
  selector: 'app-location-toggle',
  templateUrl: './location-toggle.component.html',
  styleUrls: ['./location-toggle.component.scss']
})
export class LocationToggleComponent {
  @Input('currentCity') currentCity;
  @Input('errorMessage') errorMessage;
  @Output('updatedCity') updatedCity: EventEmitter<any> = new EventEmitter();
  public toggleCityInput: boolean;

  constructor(private _geolocationService: GeolocationService) { }

  public changeCurrentCity(cityName: string): void {
    this.toggleCityInput = false;
    if (cityName.length !== 0) {
      this.updatedCity.emit(cityName);
    }
  }

  public getLocation(): void {
    this._geolocationService.getLocationByIp().subscribe((response: IGeolocationResult) => {
      if (response.city.length !== 0) {
        this.updatedCity.emit(response.city);
        localStorage.setItem('currentCity', response.city);
      }
    });
  }
}
