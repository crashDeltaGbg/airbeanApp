import { combineReducers } from 'redux';

import naviconReducer from './naviconReducer';

const rootReducer = combineReducers({
	navicon: naviconReducer
});

export default rootReducer;
