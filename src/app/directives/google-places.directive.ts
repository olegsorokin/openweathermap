import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import {} from 'googlemaps';

@Directive({
  selector: '[appGooglePlaces]'
})
export class GooglePlacesDirective implements OnInit {
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  public element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
    const autocomplete = new google.maps.places.Autocomplete(this.element, {
      types: ['(cities)']
    });
  }
}
