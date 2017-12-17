import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions/index';

class Filter extends Component {
	render() {
		if(this.props.activeFilter){
			return(
				<span>{this.props.children}</span>
			);
		}
		return(
			<a href="#" onClick={(e)=>{
				e.preventDefault();
				this.props.setFilter(this.props.filter);
			}}>{this.props.children}</a>
		);
	}
}

function mapStateToProps(state, ownProps){
	return {
		activeFilter: state.visibilityFilter === ownProps.filter
	};
}

function matchDispatchToProps(dispatch){
	return {
		setFilter: (filter) => { dispatch(setFilter(filter))}
	}
}
export default connect(mapStateToProps,matchDispatchToProps)(Filter);