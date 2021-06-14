const initState = {
	display: false
};

const orderStatusReducer = (state = initState, action) => {
	switch (action.type) {
		case 'TOGGLE_ORDER_STATUS':
			return {
				...state,
				display: action.payload
			};
		default:
			return state;
	}
};

export default orderStatusReducer;
