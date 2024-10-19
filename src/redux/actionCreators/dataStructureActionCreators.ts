import { ActionTypes, DataStructureState } from '../../types/reduxTypes';

export interface SetDataStructureAction {
  type: ActionTypes.SET_DATA_STRUCTURE;
  payload: DataStructureState;
}

export const addDataStructure = (
  data: DataStructureState
): SetDataStructureAction => ({
  type: ActionTypes.SET_DATA_STRUCTURE,
  payload: data,
});
