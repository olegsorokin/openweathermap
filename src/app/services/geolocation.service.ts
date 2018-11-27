import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeolocationService {

  constructor(private _http: HttpClient) {}

  public getBrowserLocation() {
    return navigator.geolocation.getCurrentPosition(() => {});
  }

  public getLocationByIp() {
    return this._http.get('http://ip-api.com/json/?lang=ru');
  }
}
