import { useEffect } from 'react';
import { footer, background } from '../actions/stylesAction';
import { toggleCart } from '../actions/cartAction';
import { setHistory } from '../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import placeholder from '../assets/img/svg/placeholder.svg';

function User() {
	const cart = useSelector((state) => {
		return state.cart.content;
	});

	const display = cart.length ? true : false;

	const user = useSelector((state) => {
		return state.user.details;
	});

	const userId = useSelector((state) => {
		return state.user.details.id;
	});

	const orders = useSelector((state) => {
		return state.user.history;
	});

	const dispatch = useDispatch();

	async function getOrderHistory() {
		const response = await fetch(
			`https://rocky-hamlet-92274.herokuapp.com/api/order/history/${userId}`
		);
		const data = await response.json();
		dispatch(setHistory(await data));
	}

	useEffect(() => {
		dispatch(background('dark'));
		dispatch(footer('hide'));
		dispatch(toggleCart((cart.display = display)));
	}, [dispatch]);

	useEffect(() => {
		getOrderHistory();
	}, [userId]);

	let total = 0;

	return (
		<section className="user">
			<section className="profile">
				<img src={placeholder} alt="Profile Placeholder" />
				<h1>{user.username}</h1>
				<p className="email">{user.email}</p>
			</section>
			<section id="order-history">
				<header>
					<h1>Orderhistorik</h1>
				</header>
				<main>
					{orders.length
						? orders.map((order, index) => {
								total += order.total;
								return (
									<div className="order" key={index}>
										<p className="order-id">{order.id}</p>
										<p className="order-date">{order.date}</p>
										<p className="order-text">Total ordersumma</p>
										<p className="order-total">{order.total} kr</p>
									</div>
								);
						  })
						: ''}
				</main>
				<footer>
					<p>Totalt spenderat</p>
					<p className="history-total">{total} kr</p>
				</footer>
			</section>
		</section>
	);
}

export default User;
