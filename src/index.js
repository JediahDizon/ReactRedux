//REACT
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import { Router, Route, browserHistory } from "react-router";

//CSS STYLE
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/style.css";

//COMPONENTS
import App from "./components/App";

//REDUCERS
import reducer from "./reducers";

// MIDDLEWARE
import thunk from "redux-thunk";
import { createLogger}  from "redux-logger";

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducer, middleware);

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<Route path="/" component={ App } />
		</Router>
	</Provider>, document.getElementById("root")
);