import { useSelector } from 'react-redux';
import { toggle } from '../actions/naviconAction';
import { useDispatch } from 'react-redux';
import imgClose from '../assets/img/svg/close-menu.svg';
import imgOpen from '../assets/img/svg/open-menu.svg';

// function App() {
// 	return (
// 		<section>
// 			<img src={imgUrl} />
// 		</section>
// 	);
// }

function Navicon() {
	let navicon = useSelector((state) => {
		return state.navicon;
	});

	// let navicon = false;

	const dispatch = useDispatch();

	function toggleNav() {
		dispatch(toggle(!navicon.toggle));
		console.log(navicon);
		// navicon = !navicon;
	}

	return (
		<div id="navicon-container" onClick={toggleNav}>
			{navicon.toggle ? (
				<img className="navicon" src={imgClose} alt="Close Menu Icon" />
			) : (
				<img className="navicon" src={imgOpen} alt="Open Menu Icon" />
			)}
		</div>
	);
}

export default Navicon;
