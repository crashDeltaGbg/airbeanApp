const initState = {
	items: []
};

const menuReducer = (state = initState, action) => {
	switch (action.type) {
		case 'MENU':
			return {
				...state,
				items: action.payload
			};
		default:
			return state;
	}
};

export default menuReducer;
