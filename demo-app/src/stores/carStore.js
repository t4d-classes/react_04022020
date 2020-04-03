import React, { useReducer, useContext } from 'react';

import { carToolReducer } from '../reducers/carToolReducer';

const CarStoreContext = React.createContext(null);

const cars = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'red', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'blue', price: 100000 },
];

export const CarStore = ({ children }) => {

  const [ carToolState, dispatch ] = useReducer(carToolReducer, {
    cars,
    editCarId: -1,
  });


  const carContext = {
    ...carToolState,
    editCar: (carId) => { dispatch({ type: 'EDIT_CAR', payload: { carId } }) },
    cancelCar: () => { dispatch({ type: 'CANCEL_CAR' }); },
    appendCar: (car) => { dispatch({ type: 'APPEND_CAR', payload: { car } }) },
    deleteCar: (carId) => { dispatch({ type: 'DELETE_CAR', payload: { carId } }) },
    replaceCar: (car) => { dispatch({ type: 'REPLACE_CAR', payload: { car } }) },
  };


  return <CarStoreContext.Provider value={carContext}>
    {children}
  </CarStoreContext.Provider>;

};


export const useCarStore = () => {
  return useContext(CarStoreContext);
};