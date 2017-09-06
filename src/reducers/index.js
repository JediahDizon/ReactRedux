import { ADD_GOAL, REMOVE_GOAL } from "../constants";
import Goal from "../components/Goals/Goal";

const goals = (state, action) => {
	/*
	 * PROBLEM
	 * -
	 * The `state`  variable is undefined when this function
	 * runs for the first time. Accessing the `state.goals` results
	 * in an error.
	 * 
	 * SOLUTION
	 * -
	 * Check to see if the `state` variable is falsey,
	 * If it's falsey, then return an empty array. Otherwise,
	 * return the `state.goals`.
	 */
	
	let newState = {
		goals: state ? [...state.goals] : []
	};
	switch(action.type) {
		case ADD_GOAL:
			newState.goals.push(new Goal(action.payload.title, action.payload.description));
			return newState;
		case REMOVE_GOAL:
	    	newState.goals.splice(action.payload.indexToRemove, 1);
			return newState;
		default:
			return newState;
	}
}

export default goals;