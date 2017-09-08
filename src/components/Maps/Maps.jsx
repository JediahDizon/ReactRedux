import React, { Component } from "react";
import { connect } from "react-redux";

//STYLE
import { Card, CardText, CardBlock, CardTitle, CardSubtitle } from "reactstrap";

//DATE & TIME
import Moment from "react-moment";

class Maps extends Component {
	render() {
		return (
			<Card>
				<CardBlock>
					<CardTitle>
						Hello
					</CardTitle>
					<hr />
					<CardText>
						Weather App w/ Google Maps
					</CardText>
				</CardBlock>
			</Card>
		)
	}
}

function mapStateToProps(state) {
	return {
		
	}
}

export default connect(mapStateToProps)(Maps);