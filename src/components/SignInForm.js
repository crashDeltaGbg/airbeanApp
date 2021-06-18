import { setUser } from '../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function SignInForm() {
	const [userName, setUserName] = useState('');

	const [eMail, setEmail] = useState('');

	const dispatch = useDispatch();

	let action = '';

	const users = useSelector((state) => {
		return state.users.accounts;
	});

	const [error, setError] = useState(null);

	async function createUser(user) {
		const response = await fetch(
			'https://rocky-hamlet-92274.herokuapp.com/api/account',
			{
				body: JSON.stringify({ username: user.username, email: user.email }),
				headers: { 'Content-Type': 'application/json' },
				method: 'POST'
			}
		);
		const data = await response.json();
		dispatch(
			setUser({
				username: await data.user.username,
				id: await data.user.id,
				email: await data.user.email
			})
		);
		action = '#/user';
	}

	function handleName(event) {
		setUserName(() => event.target.value);
	}

	function handleEmail(event) {
		setEmail(() => event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		const user = { username: userName, email: eMail };
		const match = users.findIndex(
			({ username, email }) =>
				username === user.username || email === user.email
		);

		if (match > -1) {
			const newUser = users[match];
			if (newUser.email === user.email && newUser.username === user.username) {
				dispatch(
					setUser({
						id: newUser.id,
						username: newUser.username,
						email: newUser.email
					})
				);
				setError(() => null);
				action = '#/user';
			} else {
				setError(() => 'Fel användarnamn eller e-post!');
			}
		} else {
			createUser(user);
		}
	}

	return (
		<form id="create-user" onSubmit={handleSubmit} action={action}>
			{error ? <p className="error">{error}</p> : ''}
			<div>
				<label for="user-name">Användarnamn</label>
				<input
					name="user-name"
					id="user-name"
					placeholder="sixten_kaffelövér"
					onChange={handleName}
					value={userName}
				/>
			</div>
			<div>
				<label for="email">E-post</label>
				<input
					name="email"
					id="user-email"
					placeholder="your.email@provider.topdom"
					type="email"
					onChange={handleEmail}
					value={eMail}
				/>
			</div>
			<div id="radio">
				<input type="radio" /> GDPR Ok!
			</div>
			<div>
				<input
					id="login"
					className="button-dark"
					type="submit"
					value="Logga in"
				/>
			</div>
		</form>
	);
}

export default SignInForm;
