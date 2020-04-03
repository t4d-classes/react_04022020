import React, { useState, useContext } from 'react';

const ColorStoreContext = React.createContext(null);

const colorList = [
  { id: 1, name: 'red' },
  { id: 2, name: 'black' },
  { id: 3, name: 'blue' },
  { id: 4, name: 'orange' },
];

export const ColorStore = ({ children }) => {

  const [ colors, setColors ] = useState(colorList);

  const colorContext = {
    colors,
    appendColor: color => setColors(colors.concat({
      ...color,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    })),
    removeColor: colorId => 
      setColors(colors.filter(c => c.id !== colorId)),
  };

  return <ColorStoreContext.Provider value={colorContext}>
    {children}
  </ColorStoreContext.Provider>;

};

export const useColorStore = () => {
  return useContext(ColorStoreContext);
};