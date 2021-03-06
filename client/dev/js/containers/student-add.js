import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field,reduxForm,reset } from 'redux-form';
import { createStudent, modifyStudent } from '../actions/index';

const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
  }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
const afterSubmit = (result, dispatch) =>
  dispatch(reset('fieldLevelValidation'));

class StudentAdd extends Component {
  constructor(props){
    super(props);
  }
  handleFormSubmit(formProps){
    console.log(formProps);
    if(formProps.id){
      console.log("updation");
      this.props.modifyStudent(formProps);
    }
    else {
      this.props.createStudent(formProps);
      console.log("Insertion")
    }
    return;
    //this.props.createStudent(formProps);
  }
	render(){
		return(
		<form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="panel panel-default">
          </div>
        	<div className="input-group">
              <label className="col-sm-2 control-label">RollNo: </label>
              <div className="col-sm-10">
              <Field type="text" name="no" component={renderField} validate={[required,minLength2,maxLength15]} />
              </div>
          </div>
          <br/>
          <div className="input-group">
          		<label className="col-sm-2 control-label">Name: </label>
          		<div className="col-sm-10">
            	<Field type="text" name="name" component={renderField} validate={[required,minLength2]}/>
          		</div>
        	</div>
        	<br/>
        	<div className="input-group">
          		<label className="col-sm-2 control-label">City: </label>
          		<div className="col-sm-10">
            	<Field type="text" name="city" component="input"/>
          		</div>
        	</div>
        	<br/>
        	<div className="input-group">
          		<label className="col-sm-2 control-label">Age: </label>
          		<div className="col-sm-10">
            	<Field type="number" name="age" component={renderField} validate={[number,required]}/>
          		</div>
        	</div>
        	<br/>
        	<div className="input-group">
          		<label className="col-sm-2 control-label">Department: </label>
          		<div className="col-sm-10">
            	<Field type="text" name="department" component="input"/>
          		</div>
        	</div>
        	<br/>
        	<div>
        	<input type="submit" value="Save" disabled={this.props.submitting} />
          <button type="button" disabled={this.props.pristine || this.props.submitting} onClick={()=>this.props.dispatch(reset('fieldLevelValidation'))} >
                    Undo Changes
          </button>
          {this.props.alert.message && <span>{this.props.alert.message}</span>}
        	</div>

        </form>
		);
	}
}

function mapStateToProps(state) {
  return {initialValues: state.activeStudent, alert:state.alert}
}

function matchDispatchToProps(dispatch){
    return {
    createStudent: (student) => {dispatch(createStudent(student))},
    modifyStudent: (student) => {dispatch(modifyStudent(student))}
  	}
}

export default connect(mapStateToProps,matchDispatchToProps)(reduxForm({
  form: 'fieldLevelValidation', // a unique identifier for this form
  onSubmitSuccess: afterSubmit,
  enableReinitialize:true,
  pristine:false,
})(StudentAdd));
