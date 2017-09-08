import { combineReducers } from "redux";
import goals from "./Goals";
import feeds from "./Feeds";

export default combineReducers({
	goals, feeds
});