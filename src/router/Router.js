import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Coffee from '../views/Coffee';
import Menu from '../views/Menu';
import Nav from '../components/Nav';
import User from '../views/User';

function MyRouter() {
	const navicon = useSelector((state) => {
		return state.navicon;
	});

	return (
		<Router>
			{navicon.display ? <Nav /> : ''}
			<Switch>
				<Route path="/coffee">
					<Coffee />
				</Route>
				<Route path="/menu">
					<Menu />
				</Route>
				<Route path="/">
					<User />
				</Route>
			</Switch>
		</Router>
	);
}

export default MyRouter;
