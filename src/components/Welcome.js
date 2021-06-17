import logoTriColor from '../assets/img/svg/logoTriColor2.svg';
import { useEffect } from 'react';
import { footer, background } from '../actions/stylesAction';
import { toggleCart } from '../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import SignInForm from '../components/SignInForm';

function Welcome() {
	const cart = useSelector((state) => {
		return state.cart;
	});

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(footer('hide'));
		dispatch(background('dark'));
		dispatch(toggleCart((cart.display = false)));
	}, [dispatch]);

	return (
		<section id="welcome">
			<img src={logoTriColor} alt="Airbean logo" id="logo-tri-color" />
			<h1>Välkommen till Airbean-familjen!</h1>
			<p>
				Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
			</p>
			<SignInForm />
		</section>
	);
}

export default Welcome;
