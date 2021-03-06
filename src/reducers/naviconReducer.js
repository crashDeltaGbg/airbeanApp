const initState = {
	display: false
};

const naviconReducer = (state = initState, action) => {
	switch (action.type) {
		case 'TOGGLE_NAV':
			return {
				...state,
				display: action.payload
			};
		default:
			return state;
	}
};

export default naviconReducer;
