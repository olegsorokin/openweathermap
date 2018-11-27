import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LocationToggleComponent } from './header/location-toggle/location-toggle.component';
import { TemperatureScaleToggleComponent } from './header/temperature-scale-toggle/temperature-scale-toggle.component';
import { WeatherService } from './services/weather.service';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { GeolocationService } from './services/geolocation.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LocationToggleComponent,
    TemperatureScaleToggleComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    GeolocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
