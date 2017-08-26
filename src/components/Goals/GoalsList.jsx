import React, { Component } from "react";
import { connect } from "react-redux";

import AddGoal from "./AddGoal";

//STYLE
import { Card, CardText, CardBlock, CardTitle, CardSubtitle } from "reactstrap";

//SLIDESHOW
import Slider from "react-slick";

//DATE & TIME
import Moment from "react-moment";

class GoalsList extends Component {
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
	
	render() {
		const sliderSettings = {
			arrows: true,
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow:4,
			slidesToScroll: 4,
			responsive: [{
				breakpoint: 576,
				settings: "unslick"
			}, { 
				breakpoint: 768,
				settings: {
					slidesToShow:3,
					slidesToScroll: 3,
			}}]
		}
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<Card>
							<CardBlock>
								<CardTitle>
									Add Goal
									<hr />
								</CardTitle>
								<AddGoal updateGoalsList={ this.updateGoalsList }/>
							</CardBlock>
						</Card>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<Slider {...sliderSettings}>
							{ this.showGoals() }
						</Slider>
					</div>
				</div>
				
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state)
	return {
		goals: state.goals
	}
}

export default connect(mapStateToProps)(GoalsList);