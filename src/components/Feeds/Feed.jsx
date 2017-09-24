const feedSchema = {
	feed: {
		title: "",
		description: "",
		image: "",
		author: "" }}, items = { items: [{
			title: "",
			description: "",
			enclosure: {
				link: ""
}}]};

class Feed {
	constructor(feed = feedSchema) {
		this.feed = {};
		this.feed.title = feed.feed.title;
		this.feed.description = feed.feed.description;
		this.feed.image = feed.feed.image
		this.feed.author = feed.feed.author;

		this.items = items.items;
	}
}

export default Feed;
