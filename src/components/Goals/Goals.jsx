import React, { Component } from "react";
import { connect } from "react-redux";

import AddGoal from "./AddGoal";
import RemoveGoal from "./RemoveGoal";

//STYLE
import { Card, CardText, CardBlock, CardTitle, CardSubtitle } from "reactstrap";

//SLIDESHOW
import Slider from "react-slick";

//DATE & TIME
import Moment from "react-moment";

class Goals extends Component {
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
	
	render() {
		const sliderSettings = {
			arrows: false,
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow:5,
			slidesToScroll: 5,
			responsive: [{
				breakpoint: 576,
				settings: "unslick"
			}, { 
				breakpoint: 768,
				settings: {
					slidesToShow:3,
					slidesToScroll: 3
			}}, { 
				breakpoint: 1024,
				settings: {
					slidesToShow:4,
					slidesToScroll: 4
			}}]
		};
		
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<AddGoal/>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<Card>
				<Slider {...sliderSettings}>
				{ this.showGoals() }
			</Slider>
						</Card>
					</div>
				</div>
				
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		goals: state.goals
	}
}

export default connect(mapStateToProps)(Goals);