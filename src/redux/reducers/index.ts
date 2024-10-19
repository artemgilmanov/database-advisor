import { combineReducers } from 'redux';
import { dataStructureReducer } from './dataStructureReducer';
import { consistencyReducer } from './consistencyReducer';
import { constraintsReducer } from './constraintsReducer';
import { featuresReducer } from './featuresReducer';
import { qualityAttributesReducer } from './qualityAttributesReducer';

export const rootReducer = combineReducers({
  dataStructure: dataStructureReducer,
  consistency: consistencyReducer,
  constraints: constraintsReducer,
  features: featuresReducer,
  qualityAttributes: qualityAttributesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
