import React from 'react';

class SortingComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
    const [field, direction] = e.target.value.split('-');
    this.context.graphql.refetch({
      sortBy: [{ field, direction }]
    });
  }

  render() {
    let fields = [];
    if (this.context.queryResult && this.context.queryResult.edges.length) {
      fields = Object.keys(this.context.queryResult.edges[0].node);
    }
    return (
      <div>
        Sort by:
        <select onChange={this.handleChange} value={this.state.value}>
          <option value="">-- please select--</option>
          {fields.map(field => (
          [
            <option key={`${field}-ASC`} value={`${field}-ASC`}>{field} (ASC)</option>,
            <option key={`${field}-DESC`} value={`${field}-DESC`}>{field} (DESC)</option>
          ]
        ))}
        </select>
      </div>
    );
  }
}

SortingComponent.contextTypes = {
  graphql: React.PropTypes.object,
  queryResult: React.PropTypes.object,
};

export default SortingComponent;
