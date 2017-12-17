import React from 'react';
import Filter from '../containers/student-filter';

const LinkFilter = () => (
	<p>
	<Filter filter="SHOW_ALL">All</Filter>
        {" "}
    <Filter filter="SHOW_ON_AGE">Age under 25</Filter>
	</p>
)

export default LinkFilter;