//simulates a "sign-in" page. User enters username to get personalized page.
import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../store/subReducers/user';

function SignIn(props) {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const username = evt.target.username.value;
		props.getUser(username);
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
