import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStudent } from '../actions/index';

class StudentAdd extends Component {
  constructor(props){
    super(props);
  }
	handleForm(obj){
		this.props.createStudent(obj);
	}
	render(){
		let noInput,nameInput, cityInput, ageInput, departmentInput = null;
		return(
		<form onSubmit={e => {
			e.preventDefault();
			var input = {
              no: noInput.value,
              name: nameInput.value,
              city: cityInput.value,
              age: ageInput.value,
              department: departmentInput.value
            };
			this.handleForm(input);
      //this.props.createStudent();
      e.target.reset();
    }
		}>
        	<div className="input-group">
              <label className="col-sm-2 control-label">RollNo: </label>
              <div className="col-sm-10">
              <input type="text" name="no" ref={node => noInput = node}/>
              </div>
          </div>
          <br/>
          <div className="input-group">
          		<label className="col-sm-2 control-label">Name: </label>
          		<div className="col-sm-10">
            	<input type="text" name="name" ref={node => nameInput = node}/>
          		</div>
        	</div>
        	<br/>
        	<div className="input-group">
          		<label className="col-sm-2 control-label">City: </label>
          		<div className="col-sm-10">
            	<input type="text" name="city" ref={node => cityInput = node}/>
          		</div>
        	</div>
        	<br/>
        	<div className="input-group">
          		<label className="col-sm-2 control-label">Age: </label>
          		<div className="col-sm-10">
            	<input type="text" name="age" ref={node => ageInput = node}/>
          		</div>
        	</div>
        	<br/>
        	<div className="input-group">
          		<label className="col-sm-2 control-label">Department: </label>
          		<div className="col-sm-10">
            	<input type="text" name="department" ref={node => departmentInput = node}/>
          		</div>
        	</div>
        	<br/>
        	<div>
        	<input type="submit" value="Save" />
        	</div>
        </form>
		);
	}
}

function matchDispatchToProps(dispatch){
    return {
    createStudent: (student) => {dispatch(createStudent(student))}
  	}
}

export default connect(null,matchDispatchToProps)(StudentAdd);
