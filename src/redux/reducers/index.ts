import { combineReducers } from 'redux';
import { dataStructureReducer } from './dataStructureReducer';
import { consistencyReducer } from './consistencyReducer';
import { constraintsReducer } from './constraintsReducer';

export const rootReducer = combineReducers({
  dataStructure: dataStructureReducer,
  consistency: consistencyReducer,
  constraints: constraintsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
