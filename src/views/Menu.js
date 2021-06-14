import { useEffect } from 'react';
import { footer, background } from '../actions/stylesAction';
import { toggleCart, content } from '../actions/cartAction';
import { updateMenu } from '../actions/menuAction';
import { useDispatch, useSelector } from 'react-redux';
import add from '../assets/img/svg/add.svg';

function Menu() {
	const cart = useSelector((state) => {
		return state.cart;
	});

	const dispatch = useDispatch();

	const menu = useSelector((state) => {
		return state.menu.items;
	});

	useEffect(() => {
		console.log('Menu from state:', menu);
	}, [menu]);

	async function getMenu() {
		const response = await fetch('http://localhost:3000/api/coffee');
		const data = await response.json();
		console.log('Menu from fetch:', await data);
		dispatch(updateMenu(await data));
	}

	function addToCart(item) {
		console.log(item);
		const cartItem = {
			title: item.title,
			price: item.price
		};
		console.log(cartItem);
		dispatch(content(cartItem));
	}

	useEffect(() => {
		dispatch(footer('show'));
		dispatch(background('light'));
		dispatch(toggleCart((cart.display = true)));
		getMenu();
	}, []);

	return (
		<article className="menu">
			<h1>Menu</h1>
			<section className="menu-items">
				{menu.length
					? menu.map((item, index) => {
							return (
								<div key={index} className="menu-item">
									<div className="add-icon">
										<img
											src={add}
											alt="Add icon"
											onClick={() => addToCart(item)}
										/>
									</div>
									<p className="menu-item-title">{item.title}</p>
									<p className="menu-item-price">{item.price} kr</p>
									<p className="menu-item-desc">{item.desc}</p>
								</div>
							);
					  })
					: ''}
			</section>
		</article>
	);
}

export default Menu;
