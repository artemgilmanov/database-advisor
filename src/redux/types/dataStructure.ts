export enum DataStructureActionTypes {
  SET_DATA_STRUCTURE = 'SET_DATA_STRUCTURE',
}

export interface DataStructureState {
  dataStructure: string;
  supportedDataTypes: string;
}

export interface SetDataStructureAction {
  type: DataStructureActionTypes.SET_DATA_STRUCTURE;
  payload: DataStructureState;
}

export type DataStructureAction = SetDataStructureAction;
