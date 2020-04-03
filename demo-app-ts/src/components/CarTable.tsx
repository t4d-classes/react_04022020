import React, { FC } from 'react';

import { Car } from '../models/car';

import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

interface CarTableProps {
  cars: Car[];
  editCarId: number;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
}

export const CarTable: FC<CarTableProps> = (props) => {

  return <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {props.cars.map(car => car.id === props.editCarId
        ? <CarEditRow key={car.id} car={car} onSaveCar={props.onSaveCar} onCancelCar={props.onCancelCar} />
        : <CarViewRow key={car.id} car={car} onEditCar={props.onEditCar} onDeleteCar={props.onDeleteCar} />)}
    </tbody>
  </table>;

};