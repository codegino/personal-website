import {
  combineReducers
} from 'redux';

import resume from "./resume";
import user from './user';
import ui from './ui';

export default combineReducers({
  resume,
  user,
  ui,
});
