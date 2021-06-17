export const toggleOrderStatus = (updateToggle) => {
	return {
		type: 'TOGGLE_ORDER_STATUS',
		payload: updateToggle
	};
};

export const fetchActiveOrder = (updateFetch) => {
	return {
		type: 'FETCH',
		payload: updateFetch
	};
};
