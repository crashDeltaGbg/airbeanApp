import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	toggleOrderStatus,
	fetchActiveOrder
} from '../actions/orderStatusAction';
import { toggleNavicon } from '../actions/naviconAction';

function Nav() {
	const navicon = useSelector((state) => {
		return state.navicon;
	});

	const orderStatus = useSelector((state) => {
		return state.orderStatus;
	});

	const dispatch = useDispatch();

	function toggleNav() {
		dispatch(toggleNavicon(!navicon.display));
	}

	function toggleOrderStatusDisplay() {
		dispatch(toggleOrderStatus(!orderStatus.display));
	}

	function toggleFetchOrder() {
		dispatch(fetchActiveOrder(true));
	}

	function handleClick() {
		toggleOrderStatusDisplay();
		toggleFetchOrder();
	}

	return (
		<section id="Nav" onClick={toggleNav}>
			<p>
				<Link to="/menu">Meny</Link>
			</p>
			<hr />
			<p>
				<Link to="/coffee">Vårt kaffe</Link>
			</p>
			<hr />
			<p>
				<Link to="/">Min profil</Link>
			</p>
			<hr />
			<p onClick={handleClick} id="toggle-order-status">
				Orderstatus
			</p>
		</section>
	);
}

export default Nav;
