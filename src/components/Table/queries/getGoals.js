import gql from "graphql-tag";

export default gql`
	{
		Tasks {
			id
			title
			description
			timestamp
		}
	}
`;
