import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Homepage, SignIn } from './components/index';
import { connect } from 'react-redux';

function Routes(props) {
	const { isLoggedIn } = props;
	return (
		<Switch>
			{!isLoggedIn && <Route exact path='/' component={SignIn} />}
			{isLoggedIn && <Route exact path='/' component={Homepage} />}
		</Switch>
	);
}

const mapState = (state) => {
	return {
		// Being 'logged in' will be defined as having a state.user that has a truthy id.
		isLoggedIn: !!state.user.id,
	};
};

export default withRouter(connect(mapState)(Routes));
