import { combineReducers } from 'redux';
import { dataStructureReducer } from './dataStructureReducer';

export const rootReducer = combineReducers({
  dataStructure: dataStructureReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
