import gql from "graphql-tag";

export default gql`
	mutation AddTask($title: String!, $description: String, $timestamp: String!) {
		addTask(title: $title, description: $description, timestamp: $timestamp) {
			id
			title
			description
			timestamp
		}
	}
`;
