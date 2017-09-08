import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadFeeds } from "../../actions";

// COMPONENT
import { Button } from "reactstrap";

class LoadFeeds extends Component {
	loadFeeds(rssFeedURL) {
		this.props.loadFeeds(rssFeedURL);
	}
	
	render() {
		return (
			<div onClick={() => this.loadFeeds(this.props.rssUrl) } style={{ width: "100%", textAlign: "center" }}>{ this.props.title }</div>
		)
	}
}

//REDUX FUNCTIONS
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ loadFeeds }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoadFeeds);