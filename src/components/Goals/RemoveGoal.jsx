import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeGoal } from "../../actions";

//STYLE
import FontAwesome from "react-fontawesome";

/**
 * Component : REMOVE GOAL
 * -
 * This component needs a props of `indexToRemove` to determine which
 * goal in the goals list is to be removed. It represents the index
 * position of the goal from the list.
 */
class RemoveGoal extends Component {
	removeGoal() {
		this.props.removeGoal(this.props.indexToRemove);
	}
	
	render() {
		return (
			<FontAwesome name="times-circle" style={{ position: "absolute", right: "1.25rem", fontSize: "1rem", cursor: "pointer" }} onClick={ () => this.removeGoal() } />
		)
	}
}

//REDUX FUNCTIONS
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ removeGoal }, dispatch);
}

export default connect(null, mapDispatchToProps)(RemoveGoal);