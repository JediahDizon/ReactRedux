import gql from "graphql-tag";

export default gql`
	mutation RemoveTask($id: String!) {
		removeTask(id: $id) {
			id
			title
			description
			date
		}
	}
`;
