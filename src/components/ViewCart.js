import { toggleView, updateContent, addContent } from '../actions/cartAction';
import {
	toggleOrderStatus,
	fetchActiveOrder
} from '../actions/orderStatusAction';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import arrowWhite from '../assets/img/svg/arrowWhite.svg';
import incrIcon from '../assets/img/svg/incrIcon.svg';
import decrIcon from '../assets/img/svg/decrIcon.svg';

function ViewCart() {
	const dispatch = useDispatch();

	const user = useSelector((state) => {
		return state.user.details;
	});

	const orderStatus = useSelector((state) => {
		return state.orderStatus;
	});

	const cart = useSelector((state) => {
		return state.cart;
	});

	const cartContent = useSelector((state) => {
		return state.cart.content;
	});

	const cartCheckout = useSelector((state) => {
		return state.cart.checkout;
	});

	async function placeOrder() {
		const response = await fetch(
			'https://rocky-hamlet-92274.herokuapp.com/api/order',
			{
				body: JSON.stringify({ userId: user.id, items: cartContent }),
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST'
			}
		);
		const data = await response.json();
		console.log('placed order:', await data);
		if (await data.success) {
			dispatch(toggleView(!cart.view));
			dispatch(fetchActiveOrder(true));
			dispatch(toggleOrderStatus(!orderStatus.display));
			dispatch(updateContent([]));
		}
	}

	function viewCart() {
		dispatch(toggleView(!cart.view));
	}

	function handleQuantity(item, value) {
		const index = cartContent.findIndex(({ id }) => id === item.id);

		if (index > -1) {
			switch (value) {
				case 'up':
					const copy = cartContent[index];
					dispatch(addContent(copy));
					break;
				case 'down':
					const newCartContent = [...cartContent];
					newCartContent.splice(index, 1);
					dispatch(updateContent(newCartContent));
					break;
				default:
					break;
			}
		} else {
			dispatch(addContent({ id: item.id }));
		}
	}

	useEffect(() => {
		console.log('Cart updated:', cartContent, cartCheckout);
	}, [cart]);

	let orderTotal = 0;

	return (
		<section id="view-cart-background">
			<div id="toggle-view-cart" onClick={viewCart}></div>
			<div id="arrow">
				<img src={arrowWhite} alt="Arrow pointing to cart icon" />
			</div>
			<section id="view-cart-container">
				<h1>Din beställning</h1>
				<div id="list">
					{cartCheckout.length > 0 ? (
						<div id="items-in-cart">
							{cartCheckout.map((item) => {
								orderTotal += item.price * item.quantity;

								return (
									<div className="list-item" key={item.id}>
										<div className="article-name">{item.title}</div>
										<div className="article-quantity">
											<img
												className="quantity-arrows"
												src={incrIcon}
												alt="Increase quantity"
												onClick={() => handleQuantity(item, 'up')}
											/>
											<span>{item.quantity}</span>
											<img
												className="quantity-arrows"
												src={decrIcon}
												alt="Decrease quantity"
												onClick={() => handleQuantity(item, 'down')}
											/>
										</div>
										<div className="unit-price">{item.price} kr</div>
									</div>
								);
							})}
						</div>
					) : (
						''
					)}
					<div id="cart-total">
						<span id="title-total">Totalt</span>
						<span id="sum-total">{orderTotal} kr</span>
						<span id="moms">inkl. moms & drönarleverans</span>
					</div>
				</div>
				<button className="button-dark" onClick={placeOrder}>
					Take my money!
				</button>
			</section>
		</section>
	);
}

export default ViewCart;
