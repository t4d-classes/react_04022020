import React, { FC, useState } from 'react';

import { Color } from '../models/color';

import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

interface ColorToolProps {
  colors: Color[];
}

export const ColorTool: FC<ColorToolProps> = (props) => {

  const [ colors, setColors ] = useState(props.colors.concat());

  const appendColor = (color: Color) => {

    setColors(colors.concat({
      ...color,
      id: Math.max(...colors.map(c => c.id) as [], 0) + 1,
    }));
  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>
      <ColorForm buttonText="Add Color" onSubmitColor={appendColor} />
    </>
  );

};
