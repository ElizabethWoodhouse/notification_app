import axios from 'axios';

const GET_ACTIVE_COURSES= 'GET_ACTIVE_COURSES';

const getActiveCourses = (category) => ({
	type: GET_ACTIVE_COURSES,
	activeCourses,
});

export const fetchActiveCourses = () => async (dispatch) => {
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
		case GET_ACTIVE_COURSES:
			return activeCourses;
		default:
			return state;
	}
}
