import gql from "graphql-tag"
import { graphql } from "react-apollo";

import Table from "./Table";

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

export default graphql(query)(Table);
