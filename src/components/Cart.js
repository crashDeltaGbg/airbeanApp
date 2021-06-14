import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import bagIcon from '../assets/img/svg/bag.svg';

function Cart() {
	const cart = useSelector((state) => {
		return state.cart;
	});

	console.log(cart);

	// let items = cart.content.length;

	// useEffect(() => {
	// 	items = cart.items.length;
	// }, [cart]);

	return (
		<div id="cart">
			<div id="cart-container">
				<img src={bagIcon} alt="Shopping Cart Icon" />
			</div>
			<div id="cart-items">
				<p>{cart.content.length}</p>
			</div>
		</div>
	);
}

export default Cart;
