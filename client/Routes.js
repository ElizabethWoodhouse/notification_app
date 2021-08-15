import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Homepage, SignIn } from './components/index';
import { connect } from 'react-redux';

function Routes(props) {
	const { isLoggedIn } = props;
	return (
		//all urls redirect user to the sign in page if not logged in or homepage if logged in
		//If I had more pages, I would use 'exact path' for the pages
		//and re-direct any non specified routes back to the homepage
		<Switch>
			{!isLoggedIn && <Route exact path='*' component={SignIn} />}
			{isLoggedIn && <Route exact path='*' component={Homepage} />}
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
