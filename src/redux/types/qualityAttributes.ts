export enum QualityAttributesActionTypes {
  SET_QUALITY_ATTRIBUTES = 'SET_QUALITY_ATTRIBUTES',
}

export interface QualityAttributesState {
  latency: string;
  throughput: string;
  scalability: string;
  availability: string;
  security: string;
  maintainability: string;
}

export interface SetQualityAttributesAction {
  type: QualityAttributesActionTypes.SET_QUALITY_ATTRIBUTES;
  payload: QualityAttributesState;
}

export type QualityAttributesAction = SetQualityAttributesAction;
