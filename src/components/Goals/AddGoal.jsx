import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addGoal } from "../../actions";

//STYLE
import { Button, 
	Form, FormGroup, Label, 
	Input } from "reactstrap";

class AddGoal extends Component {
	addGoal() {
		if(this.state) {
			this.props.addGoal(this.state);
		} else {
			alert("Type in a goal.");
		}
	}
	
	render() {
		return (
			<div className="row">
				<div className="col-12">
					<Form>
						<FormGroup>
							<Label for="goalTitle">Title</Label>
							<Input type="text" id="goalTitle" placeholder="Title..." onChange={ event => this.setState({title: event.target.value}) } />
						</FormGroup>
						<FormGroup>
							<Label for="goalDescription">Description</Label>
							<Input type="textarea" id="goalDescription" placeholder="I have to..." onChange={ event => this.setState({description: event.target.value}) }></Input>
						</FormGroup>
						
						<Button color="primary" onClick={ () => this.addGoal() }>Create Goal</Button>
					</Form>
				</div>
			</div>
		)
	}
}

//REDUX FUNCTIONS
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addGoal }, dispatch);
}

function mapStateToProps(state) {
	return {
		goals: state.goals
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGoal);