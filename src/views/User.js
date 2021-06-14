import { useEffect } from 'react';
import { footer, background } from '../actions/stylesAction';
import { toggleCart } from '../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import placeholder from '../assets/img/svg/placeholder.svg';

function User() {
	const cart = useSelector((state) => {
		return state.cart;
	});

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(background('dark'));
		dispatch(footer('hide'));
		dispatch(toggleCart((cart.display = false)));
	}, []);

	const total = 0;

	return (
		<section className="user">
			<div className="profile">
				<img src={placeholder} alt="Profile Placeholder" />
				<h1>Sixten Kaffelövér</h1>
				<p className="email">personal.email@provider.com</p>
			</div>
			<table id="order-history">
				<thead>
					<tr>
						<th colspan="2">Orderhistorik</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="id">a</td>
						<td className="date">b</td>
					</tr>
					<tr className="bottom-border">
						<td>c</td>
						<td className="sum">d</td>
					</tr>
					<tr>
						<td className="id">a</td>
						<td className="date">b</td>
					</tr>
					<tr className="bottom-border">
						<td>c</td>
						<td className="sum">d</td>
					</tr>
				</tbody>
				<tfoot>
					<tr className="top-border">
						<td>Totalt spenderat</td>
						<td className="total">{total} kr</td>
					</tr>
				</tfoot>
			</table>
		</section>
	);
}

export default User;
