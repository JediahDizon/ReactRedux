//REACT
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore} from "redux";

//CSS STYLE
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/style.css";

//COMPONENTS
import App from "./components/App";

//REDUCERS
import reducer from "./reducers";

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>, document.getElementById("root")
);