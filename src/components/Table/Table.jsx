import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { graphql } from "react-apollo";

// QUERY
import { getGoals } from "./queries";

//STYLE
import { Row, Col, Card, CardBlock, CardTitle } from "reactstrap";
import FontAwesome from "react-fontawesome";

// COMPONENTS
import ReactDataGridContainer from "./ReactDataGridContainer";
const { Draggable: { Container: DraggableContainer, RowActionsCell, DropTargetRowContainer }, Data: { Selectors }} = require("react-data-grid-addons");

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnList: props.data.Tasks ? Object.keys(props.data.Tasks[0]).map(key => { return { key, name: key }}) : [],
      goalList: props.data.Tasks || []
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      columnList: props.data.Tasks ? Object.keys(props.data.Tasks[0]).map(key => { return { key, name: key.charAt(0).toUpperCase() + key.slice(1) }}) : [],
      goalList: props.data.Tasks || []
    });
  }

  renderContents() {
    return (
      <ReactDataGridContainer
        columns={ this.state.columnList }
        rows={ this.state.goalList }
      />
		)
  }

	render() {
    return (
      <Card>
				<CardBlock>
					<CardTitle>
					React Data Grid
					{
						this.props.data.loading ?
							<span> <FontAwesome
							name='circle-o-notch'
							spin
							/></span>
						: null
					}
					</CardTitle>
  				 { !this.props.data.loading ? this.renderContents() : null }
				</CardBlock>
			</Card>
    )
	}
}

export default graphql(getGoals)(Table);
