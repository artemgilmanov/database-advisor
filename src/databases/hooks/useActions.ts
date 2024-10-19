import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DataStructureActionCreators from '../../redux/DataStructure/actionCreators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(DataStructureActionCreators, dispatch);
};
