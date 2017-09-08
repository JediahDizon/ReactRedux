import { ADD_GOAL, REMOVE_GOAL } from "../constants";
import Goal from "../components/Goals/Goal";

const goals = (state = [], action) => {
	let newState = [...state]
	switch(action.type) {
		case ADD_GOAL:
			newState.push(new Goal(action.payload.title, action.payload.description));
			return newState;
		case REMOVE_GOAL:
	    	newState.splice(action.payload.indexToRemove, 1);
			return newState;
		default:
			return state;
	}
}

export default goals;