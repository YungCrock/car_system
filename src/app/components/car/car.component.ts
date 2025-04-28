import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../../car';

@Component({
  selector: 'app-car',
  standalone: false,
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

  @Input()
  car: Car = {} as Car;

  @Output()
  saveEmiter = new EventEmitter();

  save() {
    this.saveEmiter.emit();
  }
}
