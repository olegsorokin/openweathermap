import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationToggleComponent } from './location-toggle.component';

describe('LocationToggleComponent', () => {
  let component: LocationToggleComponent;
  let fixture: ComponentFixture<LocationToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
