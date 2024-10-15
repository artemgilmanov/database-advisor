import { configureStore } from '@reduxjs/toolkit';
import dataStructureReducer from './DataStructure/reducer';

export const store = configureStore({
  reducer: {
    dataStructure: dataStructureReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
