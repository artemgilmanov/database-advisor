import { DataStructureState, ActionTypes } from '../Types/reduxTypes';

export const addDataStructure = (dataStructure: DataStructureState) => {
  return {
    type: ActionTypes.SET_DATA_STRUCTURE,
    payload: dataStructure,
  };
};
