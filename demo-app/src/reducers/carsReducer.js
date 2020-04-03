export const carsReducer = (cars, action) => {

  switch (action.type)  {
    case 'APPEND_CAR':
      return cars.concat({
        ...action.payload.car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      });
    case 'DELETE_CAR':
      return cars.filter(c => c.id !== action.payload.carId)
    case 'REPLACE_CAR':
      const carIndex = cars.findIndex(c => c.id === action.payload.car.id);
      const newCars = cars.concat();
      newCars[carIndex] = action.payload.car;
      return newCars;
    default:
      return cars;
  }
};