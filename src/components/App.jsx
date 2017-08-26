import React, { Component } from "react";
import GoalsList from "./Goals/GoalsList";

//ROUTER
import { Router, Route, browserHistory } from "react-router";

class App extends Component {
	
	render() {
		return (
			<Router path="/" history={ browserHistory }>
				<Route path="/" component={ GoalsList } />
				<Route path="/goalsList" component={ GoalsList } />
			</Router>
		)
	}
}

export default App;