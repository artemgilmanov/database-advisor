import { Action } from '@reduxjs/toolkit';

export interface DataStructureState {
  dataStructure: string;
  supportedDataTypes: string;
}

export enum ActionTypes {
  SET_DATA_STRUCTURE = 'SET_DATA_STRUCTURE',
}

export interface SetDataStructureAction
  extends Action<ActionTypes.SET_DATA_STRUCTURE> {
  payload: DataStructureState;
}
