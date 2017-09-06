import { ADD_GOAL, REMOVE_GOAL } from "../constants.js";

export const addGoal = (toAdd) => {
	const action = {
		type: ADD_GOAL,
		payload: toAdd
	}
	return action;
}

export const removeGoal = (indexToRemove) => {
	const action = {
		type: REMOVE_GOAL,
		payload: indexToRemove
	}
	return action;
}