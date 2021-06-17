export const setUser = (userData) => {
	return {
		type: 'SET_USER',
		payload: userData
	};
};

export const setHistory = (orderHistory) => {
	return {
		type: 'SET_HISTORY',
		payload: orderHistory
	};
};
