import { toggleOrderStatus } from '../actions/orderStatusAction';
import { useDispatch, useSelector } from 'react-redux';
import drone from '../assets/img/svg/drone.svg';

function OrderStatus() {
	const orderStatus = useSelector((state) => {
		return state.orderStatus;
	});

	const dispatch = useDispatch();

	function toggleDisplay() {
		dispatch(toggleOrderStatus(!orderStatus.display));
	}

	return (
		<section id="delivery">
			<p id="order-id">
				Order <span id="id-number">ID</span>
			</p>
			<img src={drone} alt="A drone delivering coffee" id="drone" />
			<h1>Din beställning är på väg!</h1>
			<p id="time">
				<span id="minutes">13</span> minuter
			</p>
			<button onClick={toggleDisplay}>OK, cool!</button>
		</section>
	);
}

export default OrderStatus;
