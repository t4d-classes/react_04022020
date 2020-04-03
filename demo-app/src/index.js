import React from 'react';
import ReactDOM from 'react-dom';

import { ColorStore } from './stores/colorStore';
import { CarStore } from './stores/carStore';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

ReactDOM.render(
  <>
    <ColorStore>
      <ColorTool />
    </ColorStore>
    <CarStore>
      <CarTool />
    </CarStore>
  </>,
  document.querySelector('#root'),
);

