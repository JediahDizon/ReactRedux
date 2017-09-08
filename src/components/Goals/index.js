import { connect } from "react-redux";

// COMPONENTS
import Goals from "./Goals";

//GOALS
function mapStateToProps(state) {
	return {
		goals: state.goals
	}
}

export default connect(mapStateToProps)(Goals);