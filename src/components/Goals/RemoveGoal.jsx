import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
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
		const elementStyle = { position: "absolute", right: ".5rem", top: ".5rem", fontSize: "1rem", cursor: "pointer" };
		return (
			<FontAwesome 
				name="times-circle" 
				style={ elementStyle } 
				onClick={ (event) => { 
					var cardElement = event.target.parentElement.parentElement;
					cardElement.style.transition = "all .3s ease";
					cardElement.style.opacity = "0"
					setTimeout(() => { 
						this.removeGoal(); 
						cardElement.style.transition = "";
						cardElement.style.opacity = ""
					}, 300);
				}} />
		)
	}
}

//REMOVE GOALS
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ removeGoal }, dispatch);
}
export default connect(null, mapDispatchToProps)(RemoveGoal);