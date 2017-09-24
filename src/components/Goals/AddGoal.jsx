import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

// QUERY
import { getGoals, addGoal } from "./queries";

// STYLE
import { Button,
	Card, CardBlock, CardTitle, CardSubtitle,
	Form, FormGroup, Label,
	Input } from "reactstrap";
import FontAwesome from "react-fontawesome";


class AddGoal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",
			loading: false
		}
	}

	addGoal() {
		if(this.state.title) {
			this.setState({ loading: true });
			this.props.mutate({
				variables: {...this.state, date: new Date().toString()},
				refetchQueries: [{query: getGoals}]
			}).then(() => {
				this.setState({
					title: "",
					description: "",
					loading: false
				});
			}).catch((error) => {
				console.log(error);
				this.setState({ loading: true });
			});
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
						<Button disabled={ !this.state.title && !this.state.loading ? true : false } color="primary" onClick={ () => this.addGoal() }>
							Add Goal
								{ this.state.loading ? <span> <FontAwesome name="spinner" spin={ true } /></span> : null }
						</Button>
					</Form>
				</CardBlock>
			</Card>
		)
	}
}


export default graphql(addGoal)(AddGoal);
