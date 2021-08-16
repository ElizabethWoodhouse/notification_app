//updates the user state
import axios from 'axios';

const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';

const getUser = (user) => ({
	type: GET_USER,
	user,
});

export const removeUser = () => ({
	type: REMOVE_USER,
});

export const fetchUser = (username) => async (dispatch) => {
	try {
		const { data: user } = await axios.get(`/api/user/${username}`);
		dispatch(getUser(user));
	} catch (error) {
		console.error('Error fetching user information in thunks:', error);
		return 'no user';
	}
};

export default function userReducer(state = {}, action) {
	switch (action.type) {
		case GET_USER:
			return action.user;
		case REMOVE_USER:
			return {};
		default:
			return state;
	}
}
