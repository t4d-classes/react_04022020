import { carsReducer } from './carsReducer';
import { editCarIdReducer } from './editCarIdReducer';

export const carToolReducer = (state, action) => {

  return {
    ...state,
    cars: carsReducer(state.cars, action),
    editCarId: editCarIdReducer(state.editCarId, action),
  };

};