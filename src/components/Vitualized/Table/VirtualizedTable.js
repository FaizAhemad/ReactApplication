import React, {forwardRef, useRef} from 'react';
import {Container} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import {Table, Column, defaultTableRowRenderer} from 'react-virtualized';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
import 'react-virtualized/styles.css';

const SortableTable = SortableContainer(Table);
const SortableTableRowRenderer = SortableElement(defaultTableRowRenderer);

function rowRenderer(props) {
  return <SortableTableRowRenderer {...props} />;
}

function CustomizedTable(props) {
  return <SortableTable rowRenderer={rowRenderer} {...props} />;
}

const list = [
  {name: 'Brian Vaughn', description: 'Software engineer'},
  // And so on...
];

function VirtualizedTable({height, width, headerHeight, rowHeight}) {
  return (
    <Container style={{margin: '120px 0px 0px 0px'}}>
      <Table
        width={width}
        height={height}
        headerHeight={headerHeight}
        rowHeight={rowHeight}
        rowCount={list.length}
        rowGetter={({index}) => list[index]}
      >
        <Column label="Name" dataKey="name" width={100} />
        <Column width={200} label="Description" dataKey="description" />
      </Table>
    </Container>
  );
}

export default VirtualizedTable;
