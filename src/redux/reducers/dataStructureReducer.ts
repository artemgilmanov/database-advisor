import { AnyAction } from 'redux';
import {
  DataStructureState,
  SetDataStructureAction,
  ActionTypes,
} from '../../types/reduxTypes';

const initialState: DataStructureState = {
  dataStructure: '',
  supportedDataTypes: '',
};

export const dataStructureReducer = (
  state: DataStructureState = initialState,
  action: SetDataStructureAction | AnyAction
): DataStructureState => {
  switch (action.type) {
    case ActionTypes.SET_DATA_STRUCTURE:
      return {
        ...state,
        dataStructure: action.payload.dataStructure,
        supportedDataTypes: action.payload.supportedDataTypes,
      };
    default:
      return state;
  }
};
