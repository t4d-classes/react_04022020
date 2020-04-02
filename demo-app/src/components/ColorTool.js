import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';

export const ColorTool = ({ colors: initialColors }) => {

  // const colorFormState = useState({
  //   name: '',
  // } /* initialization object only used on the first render */);

  // const colorForm = colorFormState[0];
  // const setColorForm = colorFormState[1];

  const [ colorForm, setColorForm ] = useState({
    name: '', hexcode: '',
  });

  const [ colors, setColors ] = useState(initialColors.concat());


  const change = (e) => {
    setColorForm({
      // object spread operator
      // copies the properties from colorForm into the new object
      ...colorForm,
      // computed property
      [ e.target.name ]: e.target.value,
    });
  };

  const appendColor = () => {

    setColors(colors.concat({
      ...colorForm,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    }));

    setColorForm({
      name: '', hexcode: '',
    });

  };



  return <>
    <ToolHeader headerText="Color Tool" />
    <ol>
      {colors.map(color => <li key={color.id}>{color.name}</li>)}
    </ol>
    <form>
      <div>
        <label htmlFor="color-name-input">Name:</label>
        <input type="text" id="color-name-input" name="name"
          value={colorForm.name} onChange={change} />
      </div>
      <div>
        <label htmlFor="color-hexcode-input">Hexcode:</label>
        <input type="text" id="color-hexcode-input" name="hexcode"
          value={colorForm.hexcode} onChange={change} />
      </div>
      <button type="button" onClick={appendColor}>Add Color</button>
    </form>
  </>;

};