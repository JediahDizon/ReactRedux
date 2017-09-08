import { LOAD_FEEDS, LOAD_FEEDS_ERROR } from "../constants";
import { get } from "../services/Transport";

export const loadFeeds = (feedURL) => {
	const apiKey = "syijgnk0c5ooc2csue1huo8n3ofvtll9zlag37mf";
	const request = get(`https://api.rss2json.com/v1/api.json?rss_url=${feedURL}&api_key=${apiKey}`)
	
	return (dispatch) => {
		request.then(response => { 
			response.json().then(json => {
				if (json.status === "ok") {
					dispatch({
						type: LOAD_FEEDS,
						payload: json
					});
				} else {
					dispatch({
						type: LOAD_FEEDS_ERROR,
						payload: {
							rssUrl: feedURL,
							response: json
						}
					})
				}
			})
		})
	}
}