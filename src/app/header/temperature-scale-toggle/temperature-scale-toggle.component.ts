import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-temperature-scale-toggle',
  templateUrl: './temperature-scale-toggle.component.html',
  styleUrls: ['./temperature-scale-toggle.component.scss']
})
export class TemperatureScaleToggleComponent implements OnInit {
  @Input('currentTemperatureScale') currentTemperatureScale;
  @Output('updatedTemperatureScale') updatedTemperatureScale: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public setImperial(): void {
    if (this.currentTemperatureScale !== 'imperial') {
      this.updatedTemperatureScale.emit('imperial');
    }
  }
  public setMetric(): void {
    if (this.currentTemperatureScale !== 'metric') {
      this.updatedTemperatureScale.emit('metric');
    }
  }
}
