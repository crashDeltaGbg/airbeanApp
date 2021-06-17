const initState = {
	display: false,
	fetch: false
};

const orderStatusReducer = (state = initState, action) => {
	switch (action.type) {
		case 'TOGGLE_ORDER_STATUS':
			return {
				...state,
				display: action.payload
			};
		case 'FETCH':
			return {
				...state,
				fetch: action.payload
			};
		default:
			return state;
	}
};

export default orderStatusReducer;
