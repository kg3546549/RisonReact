import { combineReducers } from 'redux';
import SignUser from './LoginReducer';

const rootReducer = combineReducers({
  SignUser
});
  
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;