import { AnyAction } from 'redux';
import {
  ConsistencyAction,
  ConsistencyActionTypes,
  ConsistencyState,
} from '@/redux/types/consistency';

const initialState: ConsistencyState = {
  consistencyModel: '',
  consistencyLatency: '',
  consistencyAvailability: '',
};

export const consistencyReducer = (
  state: ConsistencyState = initialState,
  action: ConsistencyAction | AnyAction
): ConsistencyState => {
  switch (action.type) {
    case ConsistencyActionTypes.SET_CONSISTENCY:
      return {
        ...state,
        consistencyModel: action.payload,
        consistencyLatency: action.payload,
        consistencyAvailability: action.payload,
      };
    default:
      return state;
  }
};
