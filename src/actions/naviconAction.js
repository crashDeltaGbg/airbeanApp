export const toggle = (toggleNavicon) => {
	return {
		type: 'TOGGLE',
		payload: toggleNavicon
	};
};

export const display = (displayNavicon) => {
	return {
		type: 'DISPLAY',
		payload: displayNavicon
	};
};
