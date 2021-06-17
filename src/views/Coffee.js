import { useEffect } from 'react';
import { footer, background } from '../actions/stylesAction';
import { toggleCart } from '../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import EvaCortado from '../assets/img/png/EvaCortado.png';

function Coffee() {
	const cart = useSelector((state) => {
		return state.cart;
	});

	const dispatch = useDispatch();

	// const toggleDisplayCart = useCallback(
	// 	(value) => {
	// 		dispatch(toggleCart((cart.display = value)));
	// 	},
	// 	[cart, dispatch]
	// );

	useEffect(() => {
		dispatch(footer('show'));
		dispatch(background('light'));
		dispatch(toggleCart((cart.display = true)));
	}, [dispatch]);

	return (
		<section className="view">
			<h1>Vårt kaffe</h1>
			<p className="preamble">
				Extraction dark skinny iced extraction cup lungo mocha. Grounds mug
				ristretto fair trade percolator macchiato decaffeinated. Roast, coffee
				robust coffee est cup body.
			</p>
			<p>
				Viennese that, so grinder eu foam iced. So mug white plunger pot mug
				frappuccino aroma. Single origin, that trifecta et brewed id
				decaffeinated.
			</p>
			<p>
				Aged, flavour americano cup trifecta cup chicory affogato. Aroma blue
				mountain coffee crema arabica java that coffee. Cream instant single
				origin flavour cup spoon coffee.
			</p>
			<div id="eva-cortado">
				<img src={EvaCortado} alt="Eva Cortado" />
				<p id="name">Eva Cortado</p>
				<p id="title">VD &amp; Grundare</p>
			</div>
		</section>
	);
}

export default Coffee;
