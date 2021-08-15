import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function HomePage(props) {
	return (
        <div>
            <p>HomePage</p>
		</div>
	);
}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(HomePage);
