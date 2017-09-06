import React, { Component } from "react";
import Goals from "./Goals/Goals";

//ROUTER
import { Router, Route, browserHistory } from "react-router";

class App extends Component {
	
	render() {
		return (
			<Router path="/" history={ browserHistory }>
				<Route path="/" component={ Goals } />
			</Router>
		)
	}
}

export default App;