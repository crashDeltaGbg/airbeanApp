import bagIcon from '../assets/img/svg/bag.svg';

function Cart() {
	return (
		<div id="cart">
			<div id="cart-container">
				<img src={bagIcon} alt="Shopping Cart Icon" />
			</div>
			<div id="cart-items">
				<p>0</p>
			</div>
		</div>
	);
}

export default Cart;
