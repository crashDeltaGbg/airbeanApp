import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOrderStatus } from '../actions/orderStatusAction';
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
				<Link to="/user">Min profil</Link>
			</p>
			<hr />
			<p onClick={toggleOrderStatusDisplay} id="toggle-order-status">
				Orderstatus
			</p>
		</section>
	);
}

export default Nav;
