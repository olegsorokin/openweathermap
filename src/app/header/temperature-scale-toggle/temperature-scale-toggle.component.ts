import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UnitsType } from '../../types/units.type';

@Component({
  selector: 'app-temperature-scale-toggle',
  templateUrl: './temperature-scale-toggle.component.html',
  styleUrls: ['./temperature-scale-toggle.component.scss']
})
export class TemperatureScaleToggleComponent {
  @Input('currentTemperatureScale') currentTemperatureScale;
  @Output('updatedTemperatureScale') updatedTemperatureScale: EventEmitter<UnitsType> = new EventEmitter();

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
