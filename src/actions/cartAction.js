export const addContent = (updateCart) => {
	return {
		type: 'ADD_CONTENT',
		payload: updateCart
	};
};

export const updateContent = (updateContent) => {
	return {
		type: 'UPDATE_CONTENT',
		payload: updateContent
	};
};

export const addToCheckOut = (updateCheckOut) => {
	return {
		type: 'CHECK_OUT',
		payload: updateCheckOut
	};
};

export const toggleCart = (updateToggle) => {
	return {
		type: 'TOGGLE_CART',
		payload: updateToggle
	};
};

export const toggleView = (updateToggle) => {
	return {
		type: 'TOGGLE_VIEW',
		payload: updateToggle
	};
};
