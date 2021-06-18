import {
	toggleOrderStatus,
	fetchActiveOrder
} from '../actions/orderStatusAction';
import { useDispatch, useSelector } from 'react-redux';
import drone from '../assets/img/svg/drone.svg';
import { useEffect, useState } from 'react';

function OrderStatus() {
	const orderStatus = useSelector((state) => {
		return state.orderStatus;
	});

	const fetchOrder = useSelector((state) => {
		return state.orderStatus.fetch;
	});

	const userId = useSelector((state) => {
		return state.user.details.id;
	});

	const dispatch = useDispatch();

	const [active, setActive] = useState(false);

	const [order, setOrder] = useState({});

	// console.log(currentTime);

	function toggleDisplay() {
		dispatch(toggleOrderStatus(!orderStatus.display));
	}

	function handleClick() {
		toggleDisplay();
	}

	async function getActiveOrder() {
		console.log(userId);
		const response = await fetch(
			`https://rocky-hamlet-92274.herokuapp.com/api/order/active/${userId}`
		);
		const data = await response.json();
		console.log('data', await data);
		setActive(await data.success);
		console.log('active', await active);
		if (await data.success) {
			setOrder({
				id: await data.activeOrders.id,
				message: await data.message,
				time: await data.activeOrders.eta
			});
		}
	}

	useEffect(() => {
		if (fetchOrder) {
			getActiveOrder();
			dispatch(fetchActiveOrder(false));
		}
	}, [fetchOrder, dispatch]);

	return (
		<section id="delivery">
			{active ? (
				<p id="order-id">
					Order <span id="id-number">{order.id}</span>
				</p>
			) : (
				''
			)}
			<img src={drone} alt="A drone delivering coffee" id="drone" />
			{active ? <h1>{order.message}</h1> : <h1>Du har ingen aktiv order</h1>}
			{active ? (
				<p id="time">
					Levereras kl. <span id="minutes">{order.time}</span>
				</p>
			) : (
				''
			)}
			<button onClick={handleClick}>OK, cool!</button>
		</section>
	);
}

export default OrderStatus;
