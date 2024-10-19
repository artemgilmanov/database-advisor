import * as DataStructureCreators from './dataStructure';
import * as ConsistencyCreators from './consistency';
import * as ConstraintsCreators from './constraints';
import * as FeaturesCreators from './features';
import * as QualityAttributes from './qualityAttributes';

export default {
  ...DataStructureCreators,
  ...ConsistencyCreators,
  ...ConstraintsCreators,
  ...FeaturesCreators,
  ...QualityAttributes,
};
