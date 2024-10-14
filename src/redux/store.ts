import { configureStore } from '@reduxjs/toolkit';
import dataStructureReducer from './DataStructure/reducer';

export default configureStore({
  reducer: {
    dataStructure: dataStructureReducer,
  },
});
