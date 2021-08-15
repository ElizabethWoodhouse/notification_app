import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';
import App from './app';
import configureStore from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
const { persistor, store } = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Router history={history}>
				<App />
			</Router>
		</PersistGate>
	</Provider>,
	document.getElementById('app')
);
