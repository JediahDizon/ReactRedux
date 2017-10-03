import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

// COMPONENTS
import ReactDataGrid from "react-data-grid";
const { Draggable: { Container: DraggableContainer, RowActionsCell, DropTargetRowContainer }, Data: { Selectors }} = require("react-data-grid-addons");


class Row extends Component {
  static propTypes: {
    idx: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      style: props.style || {}
    };
  }

  render() {
    return (
      <div style={ this.state.style }>
        <ReactDataGrid.Row ref={ node => this.row = node } {...this.props} />
      </div>
    );
  }
}
const RowRenderer = DropTargetRowContainer(Row);

class ReactDataGridContainer extends Component {
  static propTypes = {
    rowKey: React.PropTypes.string.isRequired
  }
  static defaultProps = {
    rowKey: "id"
  }

  constructor(props) {
    super(props);
    this.state = {
      _columns: props.columns || [],
      rows: props.rows || [],
      selectedIds: []
    };
    console.log(this.state);
  }

  componentWillReceiveProps(props) {
    this.setState({
      _columns: props.columns || [],
      rows: props.rows || [],
      selectedIds: []
    });
  }

  rowGetter = (i) => {
    return this.state.rows[i];
  }

  isDraggedRowSelected = (selectedRows, rowDragSource) => {
    if (selectedRows && selectedRows.length > 0) {
      let key = this.props.rowKey;
      return selectedRows.filter(r => r[key] === rowDragSource.data[key]).length > 0;
    }
    return false;
  }

  reorderRows = (e) => {
    let selectedRows = Selectors.getSelectedRowsByKey({rowKey: this.props.rowKey, selectedKeys: this.state.selectedIds, rows: this.state.rows});
    let draggedRows = this.isDraggedRowSelected(selectedRows, e.rowSource) ? selectedRows : [e.rowSource.data];
    let undraggedRows = this.state.rows.filter(function(r) {
      return draggedRows.indexOf(r) === -1;
    });
    let args = [e.rowTarget.idx, 0].concat(draggedRows);
    Array.prototype.splice.apply(undraggedRows, args);
    this.setState({rows: undraggedRows});
  }

  onRowsSelected = (rows) => {
    this.setState({selectedIds: this.state.selectedIds.concat(rows.map(r => r.row[this.props.rowKey]))});
  }

  onRowsDeselected = (rows) => {
    let rowIds = rows.map(r =>  r.row[this.props.rowKey]);
    this.setState({selectedIds: this.state.selectedIds.filter(i => rowIds.indexOf(i) === -1 )});
  }

	render() {
    return (
      <DraggableContainer>
        <ReactDataGrid
          enableCellSelection={ this.props.enableCellSelection || true }
          rowActionsCell={ RowActionsCell }
          columns={ this.state._columns }
          rowGetter={ this.rowGetter }
          rowsCount={ this.state.rows.length }
          minHeight={ this.props.minHeight || 300 }
          minColumnWidth={ this.props.minColumnWidth || 120 }
          rowRenderer={ <RowRenderer onRowDrop={ this.reorderRows }/> }
          rowSelection={{
            showCheckbox: this.props.showCheckbox || true,
            enableShiftSelect: this.props.enableShiftSelect || true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              keys: { rowKey: this.props.rowKey, values: this.state.selectedIds }
            }
          }} />
      </DraggableContainer>
    )
	}
}

export default ReactDataGridContainer;
