import { Component } from '@angular/core';
import { Car } from '../../car';

@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  car: Car = {} as Car;
  isUpdate: boolean = false;
  idCount: number = 1;

  cars : Car[] = [];

  saveCar(){
    if(!this.isUpdate){
      this.car.id = this.idCount;
      this.idCount++;
      this.cars.push(this.car);
    }

    this.car = {} as Car;
    this.isUpdate = false;
  }

  update(selectedCar : Car){
    this.car = selectedCar;
    this.isUpdate = true;
  }

  remove(removedBook : Car){
    this.cars = this.cars.filter(c => c !==removedBook);
  }
}
