import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "react-apollo";

// COMPONENTS
import AddGoal from "./AddGoal";
import RemoveGoal from "./RemoveGoal";

// QUERY
import { getGoals } from "./queries";

// STYLE
import { Card, CardText, CardBlock, CardTitle, CardSubtitle } from "reactstrap";
import FontAwesome from "react-fontawesome";


//DATE & TIME
import Moment from "react-moment";

class Goals extends Component {
	renderGoals() {
		const goals = this.props.data.Tasks || [];
		if(goals.length === 0) {
			return (
				<Card>
					<CardBlock>
						<CardTitle>There's nothing here.</CardTitle>
						<CardSubtitle><small>Let's change that!</small></CardSubtitle>
						<hr />
						<CardText>Add a goal!</CardText>
					</CardBlock>
				</Card>
			)
		}

		return (
			goals.map((goal, index) => {
				return (
					<div key={ index }>
						<Card>
							<CardBlock>
								<RemoveGoal id={ goal.id } />
								<CardTitle>{ goal.title }</CardTitle>
								<CardSubtitle><small><Moment fromNow>{ new Date(goal.timestamp) }</Moment></small></CardSubtitle>
								<hr />
								<CardText>{ goal.description }</CardText>
							</CardBlock>
						</Card>
					</div>
				)
			})
		)
	}

	renderContents() {
		if(this.props.data.loading) {
			return (
					<FontAwesome
						name="spinner"
						size="4x"
						spin
						style={{ textAlign: "center", width: "100%", marginTop: "3rem" }}
						onClick={ () => this.removeGoal() } />
				);
		} else {
			const scrollStyle = {
				overflow: "auto",
				maxHeight: "500px"
			};

			return(
				<Card style={ scrollStyle }>
					{ this.renderGoals() }
				</Card>
			);
		}
	}

	/**
	 * NOTES
	 * -
	 * Whenever the `render` function gets called due to a state uptimestamp,
	 * the DOM elements don't get replaced by new dom. They get mutated
	 * and their contents get modified.
	 */
	render() {
		return(
			<div>
				<AddGoal/>
				{ this.renderContents() }
			</div>
		);
	}
}

export default graphql(getGoals)(Goals);
