export const content = (addToCart) => {
	return {
		type: 'CONTENT',
		payload: addToCart
	};
};

export const increment = (incrementCounter) => {
	return {
		type: 'INCREMENT',
		payload: incrementCounter
	};
};

export const decrement = (decrementCounter) => {
	return {
		type: 'DECREMENT',
		payload: decrementCounter
	};
};

export const toggleCart = (updateToggle) => {
	return {
		type: 'TOGGLE_CART',
		payload: updateToggle
	};
};
