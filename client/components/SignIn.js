import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function SignIn(props) {
	return (
		<div>
			<p>Sign In page</p>
		</div>
	);
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(SignIn);
