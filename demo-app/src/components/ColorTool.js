import React, { useState } from 'react';

export const ColorTool = ({ colors }) => {

  // const colorFormState = useState({
  //   name: '',
  // } /* initialization object only used on the first render */);

  // const colorForm = colorFormState[0];
  // const setColorForm = colorFormState[1];

  const [ colorForm, setColorForm ] = useState({
    name: '', hexcode: '',
  });


  const change = (e) => {

    setColorForm({
      
      // object spread operator
      // copies the properties from colorForm into the new object
      ...colorForm,

      // computed property
      [ e.target.name ]: e.target.value,
    });

  };

  console.log(colorForm);

  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
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
    </form>
  </>;

};