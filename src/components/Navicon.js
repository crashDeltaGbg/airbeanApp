import { useSelector } from 'react-redux';
import { toggle } from '../actions/naviconAction';
import { useDispatch } from 'react-redux';

function Navicon() {
	let navicon = useSelector((state) => {
		return state.toggleNavicon;
	});

	console.log(navicon);

	const dispatch = useDispatch();

	// const Navicon = document.querySelector('#navicon');

	// function displayNavicon() {
	// 	display
	// 		? (Navicon.style.display = 'block')
	// 		: (Navicon.style.display = 'none');
	// }

	function toggleNav() {
		// navicon = !navicon;
		dispatch(toggle(!toggle));
	}

	return (
		<div id="navicon-container" onClick={toggleNav()}>
			{navicon ? (
				<img
					className="navicon"
					src="../assets/img/png/close-menu.png"
					alt="Close menu icon"
				/>
			) : (
				<img className="navicon" src="./open-menu.png" alt="Open menu icon" />
			)}
		</div>
	);
}

export default Navicon;
