//Page provides list of notifications for all incomplete courses for the specific user
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchActiveCourses } from '../store/subReducers/course';
import { removeUser } from '../store/subReducers/user';
import CourseInfoTile from './courseInfoTile';

function HomePage(props) {
	const [name, setname] = useState([]);
	useEffect(() => {
		try {
			const { getActiveCourses, user } = props;
			//retrieve course information on initial render
			if (name !== user.fullname) {
				setname(user.fullname);
				getActiveCourses(user.id);
			}
		} catch (error) {
			console.log('Error in Homepage with fetching course info:', error);
		}
	});
	const signOut = () => {
		props.logOut();
	};
	const activeCourses = props.activeCourses || [];
	return (
		<div>
			<h1>{`${name} Course Progress`}</h1>
			<div>
				{activeCourses.length > 0 ? (
					activeCourses.map((course) => (
						<CourseInfoTile key={course.id} course={course} />
					))
				) : (
					<p>You are not enrolled in any courses</p>
				)}
			</div>
			<button onClick={signOut}>Sign Out</button>
		</div>
	);
}

const mapState = (state) => ({
	user: state.user,
	activeCourses: state.course.active,
});

const mapDispatch = (dispatch) => ({
	getActiveCourses: (id) => dispatch(fetchActiveCourses(id)),
	logOut: () => dispatch(removeUser()),
});

export default connect(mapState, mapDispatch)(HomePage);
