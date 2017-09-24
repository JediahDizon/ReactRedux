import React, { Component } from "react";

// STYLE
import { Container, Row, Col } from "reactstrap";

// COMPONENTS
import Goals from "./Goals";
import Maps from "./Maps";
import Feeds from "./Feeds";

class App extends Component {
	render() {
		return (
			<Container {...{ fluid: true }}>
				<Row {...{ noGutters: true }}>
					<Col xs="12" sm="4" md="3">
						<Goals />
					</Col>
					<Col xs="12" sm="8" md="9">
						<Feeds />
					</Col>
				</Row>
			</Container>
		)
	}
}

export default App;
