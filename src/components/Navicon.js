import { useSelector, useDispatch } from 'react-redux';
import { toggleNavicon } from '../actions/naviconAction';
import imgClose from '../assets/img/svg/close-menu.svg';
import imgOpen from '../assets/img/svg/open-menu.svg';

function Navicon() {
	const navicon = useSelector((state) => {
		return state.navicon;
	});

	const dispatch = useDispatch();

	function toggleNav() {
		dispatch(toggleNavicon(!navicon.display));
	}

	return (
		<div id="navicon-container" onClick={toggleNav}>
			{navicon.display ? (
				<img className="navicon" src={imgClose} alt="Close Menu Icon" />
			) : (
				<img className="navicon" src={imgOpen} alt="Open Menu Icon" />
			)}
		</div>
	);
}

export default Navicon;
