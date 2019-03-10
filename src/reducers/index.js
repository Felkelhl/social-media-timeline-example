import { combineReducers } from 'redux-immutable';
import tweetsReducer from './tweets';

export default combineReducers({
  tweets: tweetsReducer
});