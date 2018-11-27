import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';
import { IGeolocationResult } from './geolocation-result.interface';

@Component({
  selector: 'app-location-toggle',
  templateUrl: './location-toggle.component.html',
  styleUrls: ['./location-toggle.component.scss']
})
export class LocationToggleComponent implements OnInit {
  @Input('currentCity') currentCity;
  @Input('errorMessage') errorMessage;
  @Output('updatedCity') updatedCity: EventEmitter<any> = new EventEmitter();

  public toggleCityInput: boolean;

  constructor(
    private _geolocationService: GeolocationService
  ) {}

  ngOnInit(): void {
  }

  public changeCurrentCity(cityName: string): void {
    this.toggleCityInput = false;
    this.updatedCity.emit(cityName);
  }

  public getLocation() {
    this._geolocationService.getLocationByIp().subscribe((response: IGeolocationResult) => {
      this.updatedCity.emit(response.city);

      if (response.city) {
        localStorage.setItem('currentCity', response.city);
      }
    });
  }
}
