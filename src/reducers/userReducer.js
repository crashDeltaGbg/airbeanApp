const initState = {
	details: { id: null, username: null, email: null },
	history: []
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				details: {
					id: action.payload.id,
					username: action.payload.username,
					email: action.payload.email
				}
			};
		case 'SET_HISTORY':
			return {
				...state,
				history: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
