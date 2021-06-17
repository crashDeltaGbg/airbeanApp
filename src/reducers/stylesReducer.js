const initState = {
	footer: 'hide',
	background: 'dark'
};

const stylesReducer = (state = initState, action) => {
	switch (action.type) {
		case 'BACKGROUND':
			return {
				...state,
				background: action.payload
			};
		case 'FOOTER':
			return {
				...state,
				footer: action.payload
			};
		default:
			return state;
	}
};

export default stylesReducer;
