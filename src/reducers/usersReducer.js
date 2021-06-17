const initState = {
	accounts: []
};

const usersReducer = (state = initState, action) => {
	switch (action.type) {
		case 'SET_USERS':
			return {
				...state,
				accounts: action.payload
			};
		default:
			return state;
	}
};

export default usersReducer;
