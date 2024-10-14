export interface DataStructureState {
  dataStructure: string;
  supportedDataTypes: string;
}

export enum ActionTypes {
  SET_DATA_STRUCTURE = 'SET_DATA_STRUCTURE',
}

export interface SetDataStructureAction {
  type: ActionTypes.SET_DATA_STRUCTURE;
  payload: DataStructureState;
}
