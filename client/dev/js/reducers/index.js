import {combineReducers} from 'redux';
import StudentReducer from './reducer-students';
import ActiveStudentReducer from './reducer-active-student';

/*
 * combine all reducers into a single object
 * */

const allReducers = combineReducers({
    students: StudentReducer,
    activeStudent: ActiveStudentReducer
});

export default allReducers
