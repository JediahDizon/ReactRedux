import gql from "graphql-tag"
import { graphql } from "react-apollo";

import Goals from "./Goals";

// QUERY
const query = gql`
	{
	  Tasks {
	    id
	    title
	    description
	    timestamp
	  }
	}
`;

export default graphql(query)(Goals);
