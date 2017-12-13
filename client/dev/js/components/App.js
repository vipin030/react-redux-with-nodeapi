import React from 'react';
import StudentList from '../containers/student-list';
import StudentDetails from '../containers/student-detail';
import StudentAdd from '../containers/student-add';
require('../../scss/style.scss');

const App = () => (
    <div>
    	<div>
    	<div className="leftContainer">
        <h2>Student List</h2>
        <StudentList />
        </div>
        <div className="rightContainer">
        <h2>Add Student</h2>
        <StudentAdd />
        </div>
        </div>
        <div className="bottomContainer">
        <hr />
        <h2>Student Details</h2>
        <StudentDetails />
        </div>
        
    </div>
);

export default App;