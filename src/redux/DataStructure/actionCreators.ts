import {
  ActionTypes,
  SetDataStructureAction,
  DataStructureState,
} from '../Types/reduxTypes';

export const addDataStructure = (
  data: DataStructureState
): SetDataStructureAction => {
  return {
    type: ActionTypes.SET_DATA_STRUCTURE,
    payload: data,
  };
};
