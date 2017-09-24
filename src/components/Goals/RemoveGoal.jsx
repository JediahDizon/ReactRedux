import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

// QUERY
import { getGoals, removeGoal } from "./queries";

// STYLE
import FontAwesome from "react-fontawesome";

/**
 * Component : REMOVE GOAL
 * -
 * This component needs a props of `indexToRemove` to determine which
 * goal in the goals list is to be removed. It represents the index
 * position of the goal from the list.
 */
class RemoveGoal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.id,
			loading: false
		};
	}

	componentWillReceiveProps(newProps) {
		this.state = {
			id: newProps.id,
			loading: false
		}
	}

	removeGoal() {
		this.setState({ loading: true });
		this.props.mutate({
			variables: {...this.state },
			refetchQueries: [{query: getGoals}]
		}).catch((error) => {
			console.log(error);
			this.setState({ loading: false });
		});;
	}

	render() {
		const elementStyle = {
			position: "absolute",
			right: ".5rem",
			top: ".5rem",
			fontSize: "1rem",
			cursor: "pointer",
			opacity: this.state.loading ? .3 : 1 };
		return (
			<FontAwesome
				name="times"
				spin={ this.state.loading ? true : false }
				style={ elementStyle }
				onClick={ () => this.removeGoal() } />
		)
	}
}


export default graphql(removeGoal)(RemoveGoal);
