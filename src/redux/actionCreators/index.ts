import * as DataStructureCreators from './dataStructure';
import * as ConsistencyCreators from './consistency';
import * as ConstraintsCreators from './constraints';

export default {
  ...DataStructureCreators,
  ...ConsistencyCreators,
  ...ConstraintsCreators,
};
