class Goal {
	constructor(title = "", description = "", date = new Date()) {
		this.title = title;
		this.description = description;
		this.date = date;
	}
	
	setDate(newDate) {
		this.date = newDate();
	}
	
	setTitle(newTitle) {
		this.title = newTitle;
	}
	
	setDescription(newDescription) {
		this.description = newDescription;
	}
}

export default Goal;