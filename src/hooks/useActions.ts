import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DataStructureActionCreators from '../redux/actionCreators/dataStructureActionCreators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(DataStructureActionCreators, dispatch);
};
