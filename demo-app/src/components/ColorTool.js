import React, { useState } from 'react';

import { useColorStore } from '../stores/colorStore';

import { ToolHeader } from './ToolHeader';
import { ItemList } from './ItemList';

export const ColorTool = () => {

  const { colors, appendColor, removeColor } = useColorStore();

  const [ colorForm, setColorForm ] = useState({
    name: '', hexcode: '',
  });

  const change = (e) => {
    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    });
  };

  const addColor = () => {

    appendColor({ ...colorForm });

    setColorForm({
      name: '', hexcode: '',
    });
  };

  const colorItemKey = color => color.key;
  const colorItemContent = color => color.name;

  return <>
    <ToolHeader headerText="Color Tool" />
    <ItemList items={colors}
      keyFn={colorItemKey} contentFn={colorItemContent}
      actionLabel="Delete" onAction={color => removeColor(color.id)} />
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
      <button type="button" onClick={addColor}>Add Color</button>
    </form>
  </>;

};