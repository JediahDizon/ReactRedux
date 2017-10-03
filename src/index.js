// REACT
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Router, Route, browserHistory } from "react-router";

// APOLLO
import ApolloClient from "apollo-client";
import { ApolloProvider, createNetworkInterface } from "react-apollo";

// CSS STYLE
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import "font-awesome/css/font-awesome.min.css"

// COMPONENTS
import App from "./components/App";

// REDUCERS
import { feeds } from "./reducers";

// MIDDLEWARE
import thunk from "redux-thunk";
import { createLogger}  from "redux-logger";

const apolloClient = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: "http://localhost:3000/graphql"
	})
});
const middleware = applyMiddleware(thunk, createLogger(), apolloClient.middleware());
const store = createStore(combineReducers({ feeds, apollo: apolloClient.reducer() }), middleware);

ReactDOM.render(
	<ApolloProvider client={ apolloClient } store={ store }>
		<Router history={ browserHistory }>
			<Route path="/" component={ App } />
		</Router>
	</ApolloProvider>, document.getElementById("root")
);
