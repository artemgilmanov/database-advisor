import { combineReducers } from 'redux';
import { dataStructureReducer } from './dataStructureReducer';
import { consistencyReducer } from './consistencyReducer';

export const rootReducer = combineReducers({
  dataStructure: dataStructureReducer,
  consistency: consistencyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
