import React from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { useCarStore } from '../stores/carStore';

export const CarTool = () => {

  const {
    cars, editCarId, editCar,
    cancelCar, appendCar,
    deleteCar, replaceCar,
  } = useCarStore();

  return <>
    <ToolHeader headerText="Car Tool" />
    <CarTable cars={cars} editCarId={editCarId}
      onEditCar={editCar} onDeleteCar={deleteCar}
      onSaveCar={replaceCar} onCancelCar={cancelCar} />
    <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
  </>;

};
