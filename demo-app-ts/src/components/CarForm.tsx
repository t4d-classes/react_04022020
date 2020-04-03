import React, { FC, useState, forwardRef } from 'react';

import { Car } from '../models/car';

interface CarFormProps {
  buttonText: string;
  onSubmitCar: (car: Car) => void;
  ref: React.Ref<HTMLInputElement>;
}

interface CarFormState {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  [ x: string ]: string | number;
}

const initialCarForm: () => CarFormState = () => ({
  make: '',
  model: '',
  year: 1900,
  color: '',
  price: 0,
});

export const CarForm: FC<CarFormProps> = forwardRef<HTMLInputElement, CarFormProps>((props, ref) => {




  const [ carForm, setCarForm ] = useState(initialCarForm());

  const change: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.value,
    })
  };

  const submitCar: () => void = () => {
    props.onSubmitCar({ ...carForm });
    setCarForm(initialCarForm());
  };

  return (
    <form>
      <div>
        <label htmlFor="make-input">Make</label>
        <input type="text" id="make-input" value={carForm.make}
          name="make" onChange={change} ref={ref} />
      </div>
      <div>
        <label htmlFor="model-input">Model</label>
        <input type="text" id="model-input" value={carForm.model} name="model" onChange={change} />
      </div>
      <div>
        <label htmlFor="year-input">Year</label>
        <input type="number" id="year-input" value={carForm.year} name="year" onChange={change} />
      </div>
      <div>
        <label htmlFor="color-input">Color</label>
        <input type="text" id="color-input" value={carForm.color} name="color" onChange={change} />
      </div>
      <div>
        <label htmlFor="price-input">Price</label>
        <input type="number" id="price-input" value={carForm.price} name="price" onChange={change} />
      </div>
      <button type="button" onClick={submitCar}>{props.buttonText}</button>
    </form>
  );

});
