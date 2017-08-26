import { ADD_GOAL } from "../constants.js";

export const addGoal = (toAdd) => {
	const action = {
		type: ADD_GOAL,
		payload: toAdd
	}
	return action;
}