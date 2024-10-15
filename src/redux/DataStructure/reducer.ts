import {
  DataStructureState,
  SetDataStructureAction,
  ActionTypes,
} from '../Types/reduxTypes';
// TODO: Replace depricated AnyAction
import { AnyAction } from '@reduxjs/toolkit';

const initialState: DataStructureState = {
  dataStructure: '',
  supportedDataTypes: '',
};

const isSetDataStructureAction = (
  // TODO: Replace depricated AnyAction
  action: AnyAction
): action is SetDataStructureAction => {
  return action.type === ActionTypes.SET_DATA_STRUCTURE;
};

const dataStructureReducer = (
  state: DataStructureState = initialState,
  // TODO: Replace depricated AnyAction
  action: AnyAction
): DataStructureState => {
  if (isSetDataStructureAction(action)) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
};

export default dataStructureReducer;
