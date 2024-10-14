import {
  DataStructureState,
  SetDataStructureAction,
  ActionTypes,
} from '../Types/reduxTypes';
import { Action } from '@reduxjs/toolkit';

const initialState: DataStructureState[] = [];

function isSetDataStructureAction(
  action: Action
): action is SetDataStructureAction {
  return action.type === ActionTypes.SET_DATA_STRUCTURE;
}

const dataStructureReducer = (
  state: DataStructureState[] = initialState,
  action: SetDataStructureAction | Action
): DataStructureState[] => {
  switch (action.type) {
    case ActionTypes.SET_DATA_STRUCTURE:
      if (isSetDataStructureAction(action)) {
        return [...state, action.payload];
      }
      return state;
    default:
      return state;
  }
};

export default dataStructureReducer;
