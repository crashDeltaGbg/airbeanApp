const initState = {
	toggle: false,
	display: true
};

const naviconReducer = (state = initState, action) => {
	switch (action.type) {
		case 'TOGGLE':
			return {
				...state,
				toggle: action.payload
			};
		case 'DISPLAY':
			return {
				...state,
				display: action.payload
			};
		default:
			return state;
	}
};

export default naviconReducer;
