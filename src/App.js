// import Nav from './components/Nav';
import Navicon from './components/Navicon';
import Cart from './components/Cart';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import MyRouter from './router/Router';
import OrderStatus from './components/OrderStatus';

function App() {
	const cart = useSelector((state) => {
		return state.cart;
	});

	const styles = useSelector((state) => {
		return state.styles;
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
			{orderStatus.display ? <OrderStatus /> : ''}
			<header></header>
			<section id="view">
				<MyRouter />
			</section>
			<footer className={styles.footer}></footer>
		</div>
	);
}

export default App;
