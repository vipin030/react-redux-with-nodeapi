import React, {Component} from 'react';
import {connect} from 'react-redux';

class StudentDetail extends Component {
    render() {
        if (!this.props.student) {
            return (<div>Select a student...</div>);
        }
        return (
            <div>
                <h2>{this.props.student.name} {this.props.student.city}</h2>
                <h3>Age: {this.props.student.age}</h3>
                <h3>Department: {this.props.student.department}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        student: state.activeStudent
    };
}

export default connect(mapStateToProps)(StudentDetail);
