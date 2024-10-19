import { combineReducers } from 'redux';
import { dataStructureReducer } from './dataStructureReducer';
import { consistencyReducer } from './consistencyReducer';
import { constraintsReducer } from './constraintsReducer';
import { featuresReducer } from './featuresReducer';

export const rootReducer = combineReducers({
  dataStructure: dataStructureReducer,
  consistency: consistencyReducer,
  constraints: constraintsReducer,
  features: featuresReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
