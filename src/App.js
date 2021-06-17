import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateMenu } from './actions/menuAction';
import { setUsers } from './actions/usersAction';
import Navicon from './components/Navicon';
import Cart from './components/Cart';
import MyRouter from './router/Router';
import OrderStatus from './components/OrderStatus';
import Welcome from './components/Welcome';
import ViewCart from './components/ViewCart';

function App() {
	const dispatch = useDispatch();

	async function getMenu() {
		const response = await fetch('http://localhost:3000/api/coffee');
		const data = await response.json();
		dispatch(updateMenu(await data));
	}

	async function getUsers() {
		const response = await fetch('http://localhost:3000/api/users');
		const data = await response.json();
		dispatch(setUsers(await data));
	}

	useEffect(() => {
		getMenu();
		getUsers();
	}, []);

	const cart = useSelector((state) => {
		return state.cart;
	});

	const styles = useSelector((state) => {
		return state.styles;
	});

	const user = useSelector((state) => {
		return state.user;
	});

	const body = document.querySelector('body');

	const orderStatus = useSelector((state) => {
		return state.orderStatus;
	});

	useEffect(() => {
		body.setAttribute('class', styles.background);
	}, [styles, body]);

	return (
		<div className="App">
			<Navicon />
			{cart.display ? <Cart /> : ''}
			{!user.details.id ? <Welcome /> : ''}
			{cart.view ? <ViewCart /> : ''}
			{orderStatus.display ? <OrderStatus /> : ''}
			<header className="site-header"></header>
			<section id="view">
				<MyRouter />
			</section>
			<footer className={styles.footer}></footer>
		</div>
	);
}

export default App;
