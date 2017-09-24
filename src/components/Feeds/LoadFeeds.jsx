import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadFeeds } from "../../actions";

// COMPONENT
import { Button } from "reactstrap";

class LoadFeeds extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			rssUrl: props.rssUrl
		};
	}

	loadFeeds() {
		this.props.loadFeeds(this.state.rssUrl);
	}

	render() {
		return (
			<div onClick={() => this.loadFeeds() } style={{ width: "100%", padding: ".5em" }}>{ this.state.title }</div>
		)
	}
}

// REDUX FUNCTIONS
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ loadFeeds }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoadFeeds);
