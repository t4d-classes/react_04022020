import React, { FC, useState, useRef, useEffect } from 'react';

import { Car } from '../models/car';

import { CarsData } from '../services/CarsData';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

interface CarToolProps {
  cars: Car[];
}

export const CarTool: FC<CarToolProps> = (props) => {

  const [ editCarId, setEditCarId ] = useState(-1);
  const [ cars, setCars ] = useState(/* props.cars.concat() */ [] as Car[]);

  const defaultControlRef = useRef<HTMLInputElement>(null);

  useEffect(() => {

    if (defaultControlRef.current !== null) {
      const inputControl =  defaultControlRef.current;
      inputControl.focus();
    }

  }, []);

  useEffect(() => {

    const carsData = new CarsData();
    carsData.all().then(cars => setCars(cars));

  }, []);

  // const appendCar: (car: Car) => void = (car: Car) => {

  //   // setCars(cars.concat({
  //   //   ...car,
  //   //   id: Math.max(...cars.map(c => c.id) as [], 0) + 1,
  //   // }));

  //   const carsData = new CarsData();
  //   carsData
  //     .append(car)
  //     .then(() => {
  //       return carsData.all();
  //     })
  //     .then(cars => {
  //       setCars(cars);
  //       setEditCarId(-1);
  //     });

  // };

  const appendCar: (car: Car) => void = async (car: Car) => {

    // setCars(cars.concat({
    //   ...car,
    //   id: Math.max(...cars.map(c => c.id) as [], 0) + 1,
    // }));

    const carsData = new CarsData();
    
    await carsData.append(car);

    const cars = await carsData.all();

    setCars(cars);
    setEditCarId(-1);

  };

  const deleteCar = async (carId: number) => {

    // setCars(cars.filter(c => c.id !== carId));
    // setEditCarId(-1);

    const carsData = new CarsData();
    
    await carsData.delete(carId);

    const cars = await carsData.all();

    setCars(cars);
    setEditCarId(-1);

    if (defaultControlRef.current) {
      defaultControlRef.current.focus();
    }
  };

  const replaceCar = async (car: Car) => {

    // const carIndex = cars.findIndex(c => c.id === car.id);
    // const newCars = cars.concat();
    // newCars[carIndex] = car;
    // setCars(newCars);
    // setEditCarId(-1);

    const carsData = new CarsData();
    
    await carsData.replace(car);

    const cars = await carsData.all();

    setCars(cars);
    setEditCarId(-1);

    if (defaultControlRef.current) {
      defaultControlRef.current.focus();
    }

  };

  const cancelCar = () => {
    setEditCarId(-1);
    if (defaultControlRef.current) {
      defaultControlRef.current.focus();
    }
  }

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={deleteCar}
        onCancelCar={cancelCar} onSaveCar={replaceCar} />
      <CarForm buttonText="Add Car" onSubmitCar={appendCar} ref={defaultControlRef} />
    </>
  );

};
