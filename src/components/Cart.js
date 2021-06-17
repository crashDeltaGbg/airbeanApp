import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleView, addToCheckOut } from '../actions/cartAction';

import bagIcon from '../assets/img/svg/bag.svg';

function Cart() {
	const dispatch = useDispatch();

	function viewCart() {
		dispatch(toggleView(!cart.view));
	}

	const menu = useSelector((state) => {
		return state.menu.items;
	});

	const cart = useSelector((state) => {
		return state.cart;
	});

	const cartContent = useSelector((state) => {
		return state.cart.content;
	});

	useEffect(() => {
		function groupCartItems() {
			console.log('hej från cart');
			let newCart = [];
			for (let i = 0; i < cart.content.length; i++) {
				const indexInCart = newCart.findIndex(
					({ id }) => id === cart.content[i].id
				);

				const itemInMenu = menu.find(({ id }) => id === cart.content[i].id);

				if (indexInCart >= 0) {
					newCart[indexInCart].quantity += 1;
				} else {
					newCart.push({
						id: cart.content[i].id,
						quantity: 1,
						title: itemInMenu.title,
						price: itemInMenu.price
					});
				}
			}

			dispatch(addToCheckOut(newCart));

			console.log('New Cart:', newCart);
			console.log('New Cart length:', newCart.length);
		}
		groupCartItems();
	}, [cart.content, menu, dispatch, cartContent]);

	return (
		<div id="cart">
			<div id="cart-container">
				<img src={bagIcon} alt="Shopping Cart Icon" onClick={viewCart} />
			</div>
			<div id="cart-items">
				<p>{cart.content.length}</p>
			</div>
		</div>
	);
}

export default Cart;
