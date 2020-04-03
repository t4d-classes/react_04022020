import { Car } from '../models/car';

export class CarsData {

  all(): Promise<Car[]> {
    return fetch('http://localhost:3050/cars')
      .then(res => res.json());
  }

  append(car: Car): Promise<Car> {
    return fetch('http://localhost:3050/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    })
      .then(res => res.json());
  }

  replace(car: Car): Promise<Car> {
    return fetch(`http://localhost:3050/cars/${encodeURIComponent(String(car.id))}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    })
      .then(res => res.json());
  }

  delete(carId: number): Promise<Car> {
    return fetch(`http://localhost:3050/cars/${encodeURIComponent(String(carId))}`, {
      method: 'DELETE',
    })
      .then(res => res.json());
  }
}