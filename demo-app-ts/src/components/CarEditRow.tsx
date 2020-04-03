import React, { Component, createRef } from 'react';

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

export class CarEditRow extends Component<CarEditRowProps, CarEditRowState> {

  defaultControlRef = createRef<HTMLInputElement>();

  constructor(props: CarEditRowProps) {
    super(props);

    this.state = getInitialCarEditRowState(props.car);
  }

  componentDidMount() {
    if (this.defaultControlRef.current) {
      this.defaultControlRef.current.focus();
    }

  }

  change = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [ e.target.name ]: e.target.type === 'number' ? Number(e.target.value) : e.target.value,
    });
  }

  saveCar = () => {
    this.props.onSaveCar({
      ...this.state,
      id: this.props.car.id,
    });
  }

  render() {

    return <tr>
    <td>{this.props.car.id}</td>
    <td><input type="text" id="edit-make-input" value={this.state.make}
      name="make" onChange={this.change} ref={this.defaultControlRef} /></td>
    <td><input type="text" id="edit-model-input" value={this.state.model} name="model" onChange={this.change} /></td>
    <td><input type="number" id="edit-year-input" value={this.state.year} name="year" onChange={this.change} /></td>
    <td><input type="text" id="edit-color-input" value={this.state.color} name="color" onChange={this.change} /></td>
    <td><input type="number" id="edit-price-input" value={this.state.price} name="price" onChange={this.change} /></td>
    <td>
      <button type="button" onClick={this.saveCar}>Save</button>
      <button type="button" onClick={this.props.onCancelCar}>Cancel</button>
    </td>
  </tr>;



  }

}