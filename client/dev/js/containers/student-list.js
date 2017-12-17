import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {listStudent, selectStudent} from '../actions/index'


class StudentList extends Component {

    componentWillMount(){
        this.props.listStudent();
    }
    renderList() {
        return this.props.students.map((student) => {
            return (
                <li
                    key={student.no}
                    onClick={() => this.props.selectStudent(student)}
                >
                    {student.name} {student.city}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}
const getVisibleStudent = (student,filter) => {
    switch(filter){
        case "SHOW_ALL":
            return student;
        case "SHOW_ON_AGE":
            return student.filter(std=>std.age<25);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

function mapStateToProps(state) {
    return {
        students: getVisibleStudent(state.students,state.visibilityFilter)
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectStudent: selectStudent, listStudent: listStudent}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(StudentList);
