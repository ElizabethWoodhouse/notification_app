//shows user's course progress information
import React from 'react';

const CourseInfoTile = (props) => {
	const percentage = (progress, total) => {
		progress = Number(progress);
		total = Number(total);
		return Math.round((100 * progress) / total);
	};
	const { course } = props;
	return (
		<div className='individual_notification'>
			<h4>{course.name}</h4>
			<p>{percentage(course.status.currentPage, course.pages)}% complete</p>
			<p>
				{course.status.currentPage} pages out of {course.pages} pages completed
			</p>
		</div>
	);
};

export default CourseInfoTile;
