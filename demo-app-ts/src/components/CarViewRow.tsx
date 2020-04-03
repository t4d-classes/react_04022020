import React, { FC } from 'react';

import { Car } from '../models/car';

interface CarViewRowProps {
  car: Car;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
}

export const CarViewRow: FC<CarViewRowProps> = (props) => {

  return <tr>
    <td>{props.car.id}</td>
    <td>{props.car.make}</td>
    <td>{props.car.model}</td>
    <td>{props.car.year}</td>
    <td>{props.car.color}</td>
    <td>{props.car.price}</td>
    <td>
      <button type="button" onClick={() => props.car.id && props.onEditCar(props.car.id)}>Edit</button>
      <button type="button" onClick={() => props.car.id && props.onDeleteCar(props.car.id)}>Delete</button>
    </td>
  </tr>;

};