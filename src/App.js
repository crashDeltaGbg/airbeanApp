import Nav from './components/Nav';
import Navicon from './components/Navicon';
import Cart from './components/Cart';
import { useSelector } from 'react-redux';

function App() {
	const displayNav = useSelector((state) => {
		return state.navicon;
	});

	return (
		<div className="App">
			<Navicon />
			<Cart />
			<header></header>
			<section>
				<h1>View</h1>
				{displayNav.toggle ? <Nav /> : ''}
			</section>
			<footer></footer>
		</div>
	);
}

export default App;
