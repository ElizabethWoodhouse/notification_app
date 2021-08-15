//updates the course state
import axios from 'axios';

const GET_ACTIVE_COURSES = 'GET_ACTIVE_COURSES';

const getActiveCourses = (activeCourses) => ({
	type: GET_ACTIVE_COURSES,
	activeCourses,
});

export const fetchActiveCourses = (userId) => async (dispatch) => {
	try {
		const { data } = await axios.get(`/api/course/progress/${userId}`);
		dispatch(getActiveCourses(data.courses));
	} catch (error) {
		console.error('Error:', error);
	}
};

export default function courseReducer(state = {}, action) {
	switch (action.type) {
		case GET_ACTIVE_COURSES:
			//add user's active courses to course state
			return { ...state, active: action.activeCourses };
		default:
			return state;
	}
}
