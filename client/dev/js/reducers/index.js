import {combineReducers} from 'redux';
import StudentReducer from './reducer-students';
import ActiveStudentReducer from './reducer-active-student';
import VisibilityFilterReducer from './reducer-visibility-filter';
import AlertReducer from './reducer-alert';
import { reducer as formReducer} from 'redux-form';

/*
 * combine all reducers into a single object
 * */
const reducers = {
  // ... your other reducers here ...
  form: formReducer
};
const allReducers = combineReducers({
    students: StudentReducer,
    activeStudent: ActiveStudentReducer,
    visibilityFilter: VisibilityFilterReducer,
    alert: AlertReducer,
    form: formReducer
});

export default allReducers
