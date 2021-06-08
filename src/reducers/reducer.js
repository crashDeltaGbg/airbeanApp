import { combineReducers } from 'redux';

import naviconReducer from './naviconReducer';

const rootReducer = combineReducers({
	toggleNavicon: naviconReducer.toggle,
	displayNavicon: naviconReducer.display
});

export default rootReducer;
