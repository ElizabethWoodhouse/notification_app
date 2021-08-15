import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {
	courseReducer,
	userReducer,
} from './subReducers/index';

const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({
	course: courseReducer,
	user: userReducer,
});

export default function configureStore() {
	let store = createStore(
		persistReducer(persistConfig, rootReducer),
		applyMiddleware(thunkMiddleware, loggerMiddleware)
	);
	let persistor = persistStore(store);
	return { store, persistor };
}
//comment: used redux-persist to have persistent redux store on page refresh
