import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from './models/color';
import { Car } from './models/car';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList: Color[] = [
  { id: 1, name: 'blue', hexcode: '0000FF' },
  { id: 2, name: 'yellow', hexcode: '00FFFF' },
  { id: 3, name: 'red', hexcode: 'FF0000' },
];

const carList: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'red', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'blue', price: 100000 },
];

ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);

