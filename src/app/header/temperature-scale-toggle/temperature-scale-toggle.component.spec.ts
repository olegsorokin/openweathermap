import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureScaleToggleComponent } from './temperature-scale-toggle.component';

describe('TemperatureScaleToggleComponent', () => {
  let component: TemperatureScaleToggleComponent;
  let fixture: ComponentFixture<TemperatureScaleToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureScaleToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureScaleToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
