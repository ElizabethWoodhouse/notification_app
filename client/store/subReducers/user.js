import axios from 'axios';

const GET_USER = 'GET_USER';

const getUser = (category) => ({
	type: GET_USER,
	user,
});

export const fetchUser = () => async (dispatch) => {
	try {
		//make a call to back-end to get user information
		//username
		// dispatch(getUser());
	} catch (error) {
		console.error('Error:', error);
	}
};

export default function category(state = {}, { type, category }) {
	switch (type) {
		case GET_USER:
			return user;
		default:
			return state;
	}
}
