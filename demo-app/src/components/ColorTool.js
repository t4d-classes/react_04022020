import React from 'react';

export const ColorTool = () => {

  const colors = [
    { id: 1, name: 'red' },
    { id: 2, name: 'black' },
    { id: 3, name: 'blue' },
    { id: 4, name: 'orange' },
  ];

  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
    <ol>
      {colors.map(color => <li key={color.id}>{color.name}</li>)}
    </ol>
  </>;

};