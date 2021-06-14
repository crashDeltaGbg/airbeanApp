const initState = {
	content: [],
	counter: 0,
	display: false
};

const cartReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CONTENT':
			return {
				...state,
				content: [...state.content, action.payload]
			};
		case 'INCREMENT':
			return {
				...state,
				counter: state.counter + action.payload
			};
		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - action.payload
			};
		case 'TOGGLE_CART':
			return {
				...state,
				display: action.payload
			};
		default:
			return state;
	}
};

export default cartReducer;
