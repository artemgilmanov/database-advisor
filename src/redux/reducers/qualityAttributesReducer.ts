import { AnyAction } from 'redux';
import {
  QualityAttributesAction,
  QualityAttributesActionTypes,
  QualityAttributesState,
} from '@/redux/types/qualityAttributes';

const initialState: QualityAttributesState = {
  latency: '',
  throughput: '',
  scalability: '',
  availability: '',
  security: '',
  maintainability: '',
};

export const qualityAttributesReducer = (
  state: QualityAttributesState = initialState,
  action: QualityAttributesAction | AnyAction
): QualityAttributesState => {
  switch (action.type) {
    case QualityAttributesActionTypes.SET_QUALITY_ATTRIBUTES:
      return {
        ...state,
        latency: action.payload.latency,
        throughput: action.payload.throughput,
        scalability: action.payload.scalability,
        availability: action.payload.availability,
        security: action.payload.security,
        maintainability: action.payload.maintainability,
      };
    default:
      return state;
  }
};
