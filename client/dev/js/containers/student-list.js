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

function mapStateToProps(state) {
    return {
        students: state.students
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectStudent: selectStudent, listStudent: listStudent}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(StudentList);
