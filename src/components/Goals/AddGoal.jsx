import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addGoal } from "../../actions";

//STYLE
import { Button, 
	Card, CardBlock, CardTitle, CardSubtitle,
	Form, FormGroup, Label, 
	Input } from "reactstrap";

class AddGoal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: ""
		}
	}
	addGoal() {
		if(this.state) {
			this.props.addGoal(this.state);
			this.setState({title: "", description: ""});
		} else {
			alert("Type in a goal.");
		}
	}
	
	render() {
		return (
			<Card>
				<CardBlock>
					<CardTitle>
						Add Goal
					</CardTitle>
					<CardSubtitle><hr /></CardSubtitle>
					<Form>
						<FormGroup>
							<Label for="goalTitle">Title</Label>
							<Input type="text" id="goalTitle" placeholder="Title..." onChange={ event => this.setState({title: event.target.value}) } value={ this.state.title } />
						</FormGroup>
						<FormGroup>
							<Label for="goalDescription">Description</Label>
							<Input type="textarea" id="goalDescription" placeholder="I have to..." onChange={ event => this.setState({description: event.target.value}) } value={ this.state.description }></Input>
						</FormGroup>
						<Button disabled={ !this.state.title ? true : false } color="primary" onClick={ () => this.addGoal() }>Add Goal</Button>
					</Form>
				</CardBlock>
			</Card>
		)
	}
}

//REDUX FUNCTIONS
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addGoal }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddGoal);