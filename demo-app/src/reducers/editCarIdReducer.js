export const editCarIdReducer = (editCarId, action) => {

  if (action.type === 'EDIT_CAR') {
    return action.payload.carId;
  }

  if ([ 'CANCEL_CAR', 'APPEND_CAR', 'REPLACE_CAR', 'DELETE_CAR' ].includes(action.type)) {
    return -1;
  }

  return editCarId;

};