//simulates a "sign-in" page. User enters username to get personalized page.
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../store/subReducers/user';

function SignIn(props) {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const username = evt.target.username.value;
		props.getUser(username);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Enter UserName:</label>
					<input name='username' type='text' required />
				</div>
				<button type='submit'>Sign In</button>
			</form>
		</div>
	);
}

const mapDispatch = (dispatch) => ({
	getUser: (username) => dispatch(fetchUser(username)),
});

export default connect(null, mapDispatch)(SignIn);
