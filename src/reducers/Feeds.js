import { LOAD_FEEDS, LOAD_FEEDS_ERROR } from "../constants";
import Feed from "../components/Feeds/Feed";

const feeds = (state = [], action) => {
	let newState = [];
	switch(action.type) {
		case LOAD_FEEDS_ERROR:
			newState = [new Feed({
				title: "Something Went Wrong", 
				description: "Feeds cannot be retrieved.", 
				image: "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png"
				}, [{
					title: "Please check RSS url",
					description: action.payload.rssUrl + " | " + JSON.stringify(action.payload.response),
					enclosure: {
						link: ""
					}
				}]
			)];
			return newState;
		case LOAD_FEEDS:
			newState = [{feed: {...action.payload.feed}, items: [...action.payload.items]}];
			return newState;
		default:
			return state;
	}
}

export default feeds;