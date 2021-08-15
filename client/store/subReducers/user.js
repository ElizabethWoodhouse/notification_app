//updates the user state
import axios from 'axios';

const GET_USER = 'GET_USER';

const getUser = (user) => ({
	type: GET_USER,
	user,
});

export const fetchUser = (username) => async (dispatch) => {
	try {
		const { data: user } = await axios.get(`/api/user/${username}`);
		dispatch(getUser(user));
	} catch (error) {
		console.error('Error:', error);
	}
};

export default function category(state = {}, { type, user }) {
	switch (type) {
		case GET_USER:
			return user;
		default:
			return state;
	}
}
