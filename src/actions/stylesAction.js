export const footer = (footerClass) => {
	return {
		type: 'FOOTER',
		payload: footerClass
	};
};

export const background = (setBackground) => {
	return {
		type: 'BACKGROUND',
		payload: setBackground
	};
};
