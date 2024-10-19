import { AnyAction } from 'redux';
import {
  DataStructureAction,
  DataStructureActionTypes,
  DataStructureState,
} from '../types/dataStructure';

const initialState: DataStructureState = {
  dataStructure: '',
  supportedDataTypes: '',
};

export const dataStructureReducer = (
  state: DataStructureState = initialState,
  action: DataStructureAction | AnyAction
): DataStructureState => {
  switch (action.type) {
    case DataStructureActionTypes.SET_DATA_STRUCTURE:
      return {
        ...state,
        dataStructure: action.payload,
        supportedDataTypes: action.payload,
      };
    default:
      return state;
  }
};
