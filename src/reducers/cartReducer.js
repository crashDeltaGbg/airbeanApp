const initState = {
	content: [],
	checkout: [],
	counter: 0,
	display: false,
	view: false
};

const cartReducer = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_CONTENT':
			return {
				...state,
				content: [...state.content, action.payload]
			};
		case 'UPDATE_CONTENT':
			return {
				...state,
				content: action.payload
			};
		case 'CHECK_OUT':
			return {
				...state,
				checkout: action.payload
			};
		case 'TOGGLE_CART':
			return {
				...state,
				display: action.payload
			};
		case 'TOGGLE_VIEW':
			return {
				...state,
				view: action.payload
			};
		default:
			return state;
	}
};

export default cartReducer;
