import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-location-toggle',
  templateUrl: './location-toggle.component.html',
  styleUrls: ['./location-toggle.component.scss']
})
export class LocationToggleComponent implements OnInit {
  @Input('currentCity') currentCity;
  @Output('updatedCity') updatedCity: EventEmitter<any> = new EventEmitter();

  public toggleCityInput: boolean;

  constructor() {}

  ngOnInit(): void {
  }

  public changeCurrentCity(cityName: string): void {
    this.toggleCityInput = false;
    this.updatedCity.emit(cityName);
  }
}
