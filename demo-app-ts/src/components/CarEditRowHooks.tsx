import React, { FC, useState } from 'react';

import { Car } from '../models/car';

interface CarEditRowProps {
  car: Car;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
}

interface CarEditRowState {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  [ x: string ]: number | string;
}

const getInitialCarEditRowState: (car: Car) => CarEditRowState = (car: Car) => ({
  make: car.make,
  model: car.model,
  year: car.year,
  color: car.color,
  price: car.price,
})

export const CarEditRow: FC<CarEditRowProps> = (props) =>  {


  const [ carForm, setCarForm ] = useState(getInitialCarEditRowState(props.car));

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number' ? Number(e.target.value) : e.target.value,
    });
  }

  const saveCar = () => {
    props.onSaveCar({
      ...carForm,
      id: props.car.id,
    });
  }

  return <tr>
    <td>{props.car.id}</td>
    <td><input type="text" id="edit-make-input" value={carForm.make} name="make" onChange={change} /></td>
    <td><input type="text" id="edit-model-input" value={carForm.model} name="model" onChange={change} /></td>
    <td><input type="number" id="edit-year-input" value={carForm.year} name="year" onChange={change} /></td>
    <td><input type="text" id="edit-color-input" value={carForm.color} name="color" onChange={change} /></td>
    <td><input type="number" id="edit-price-input" value={carForm.price} name="price" onChange={change} /></td>
    <td>
      <button type="button" onClick={saveCar}>Save</button>
      <button type="button" onClick={props.onCancelCar}>Cancel</button>
    </td>
  </tr>;

};
