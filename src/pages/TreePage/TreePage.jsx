import React, { Component } from 'react';
import TreeTable from './components/TreeTable';

export default class TreePage extends Component {
  static displayName = 'TreePage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tree-page-page">
        <TreeTable />
      </div>
    );
  }
}
