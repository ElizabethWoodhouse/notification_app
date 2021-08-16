//simulates a "sign-in" page. User enters username to get personalized page.
import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../store/subReducers/user';

function SignIn(props) {
	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			const username = evt.target.username.value;
			let user = await props.getUser(username);
			if (user === 'no user') {
				window.alert('Can not find User');
				console.log('Error fetching user information, user may not exist');
				evt.target.username.value = '';
			}
		} catch (error) {
			console.log('Error in sign-in:', error);
		}
	};
	return (
		<div className='signInPage'>
			<div className='signInContainer'>
				<div>
					<h1>Welcome Back</h1>
					<form onSubmit={handleSubmit} className='signInForm'>
						<div>
							<label>Username: </label>
							<input name='username' type='text' required />
						</div>
						<button className='login_button' type='submit'>
							Sign In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

const mapDispatch = (dispatch) => ({
	getUser: (username) => dispatch(fetchUser(username)),
});

export default connect(null, mapDispatch)(SignIn);
