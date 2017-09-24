import { connect } from "react-redux";
import Feeds from "./Feeds";

function mapStateToProps(state) {
	return {
		feeds: state.feeds
	}
}

export default connect(mapStateToProps)(Feeds);
