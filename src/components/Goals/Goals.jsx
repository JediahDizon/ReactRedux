import React, { Component } from "react";

import AddGoal from "./AddGoal";
import RemoveGoal from "./RemoveGoal";

//STYLE
import { Card, CardText, CardBlock, CardTitle, CardSubtitle } from "reactstrap";

//DATE & TIME
import Moment from "react-moment";

export default class Goals extends Component {
	showGoals() {
		const goals = this.props.goals;
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
								<RemoveGoal indexToRemove={ index } />
								<CardTitle>{ goal.title }</CardTitle>
								<CardSubtitle><small><Moment fromNow>{ goal.date }</Moment></small></CardSubtitle>
								<hr />
								<CardText>{ goal.description }</CardText>
							</CardBlock>
						</Card>
					</div>
				)
			})
		)
	}
	
	/**
	 * NOTES
	 * -
	 * Whenever the `render` function gets called due to a state update,
	 * the DOM elements don't get replaced by new dom. They get mutated
	 * and their contents get modified.
	 */
	render() {
		const scrollStyle = {
			overflow: "auto",
			maxHeight: "500px"
		}
		
		return (
			<div>
				<AddGoal/>
				<Card style={ scrollStyle }>
					{ this.showGoals() }
				</Card>
			</div>
		)
	}
}