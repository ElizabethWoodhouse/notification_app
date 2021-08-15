import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Homepage, SignIn } from './components/index';
import { connect } from 'react-redux';

function Routes(prop) {
	// const { isLoggedIn } = this.props;
	return (
		<Switch>
			<Route exact path='/' component={SignIn} />
			{/* {!isLoggedIn && <Route exact path='/' component={SignIn} />}
				{isLoggedIn && <Route exact path='/' component={Homepage} />} */}
		</Switch>
	);
}
const mapState = (state) => {
	return {
		// Being 'logged in' will be defined has having a state.user that has a truthy id.
		isLoggedIn: !!state.user.id,
	};
};

const mapDispatch = (dispatch) => {
	return {};
};

export default withRouter(connect(mapState, mapDispatch)(Routes));
