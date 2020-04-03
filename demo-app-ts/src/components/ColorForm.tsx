import React, { FC, useState } from 'react';

import { Color } from '../models/color';

interface ColorFormProps {
  buttonText: string;
  onSubmitColor: (color: Color) => void;
}

interface ColorFormState {
  name: string;
  hexcode: string;
  [ x: string ]: string;
}

const initialColorForm: () => ColorFormState = () => ({
  name: '',
  hexcode: '',
});

export const ColorForm: FC<ColorFormProps> = (props) => {

  const [ colorForm, setColorForm ] = useState(initialColorForm());

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    })
  };

  const submitColor = () => {

    props.onSubmitColor({
      ...colorForm,
    });

    setColorForm(initialColorForm());
  };

  return <form>
    <div>
      <label htmlFor="name-input">Name</label>
      <input type="text" id="name-input" value={colorForm.name}
        name="name" onChange={change}/>
    </div>
    <div>
      <label htmlFor="hexcode-input">Hexcode</label>
      <input type="text" id="hexcode-input" value={colorForm.hexcode}
        name="hexcode" onChange={change} />
    </div>

    <button type="button" onClick={submitColor}>{props.buttonText}</button>
  </form>;

};
