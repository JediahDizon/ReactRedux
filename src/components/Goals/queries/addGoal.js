import gql from "graphql-tag";

export default gql`
	mutation AddTask($title: String!, $description: String, $date: String!) {
		addTask(title: $title, description: $description, date: $date) {
			id
			title
			description
			date
		}
	}
`;
