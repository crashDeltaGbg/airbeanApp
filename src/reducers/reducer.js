import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import menuReducer from './menuReducer';
import naviconReducer from './naviconReducer';
import orderStatusReducer from './orderStatusReducer';
import stylesReducer from './stylesReducer';

const rootReducer = combineReducers({
	cart: cartReducer,
	menu: menuReducer,
	navicon: naviconReducer,
	orderStatus: orderStatusReducer,
	styles: stylesReducer
});

export default rootReducer;
