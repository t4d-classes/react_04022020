import React from 'react';

export const ColorTool = (props) => {

  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
    <ol>
      {props.colors.map(color => <li key={color.id}>{color.name}</li>)}
    </ol>
  </>;

};