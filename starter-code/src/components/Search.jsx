import React from "react";

export default class Search extends React.Component {
  render() {
    return (
      <input
        type="text"
        onChange={e => this.props.searchFoodProp(e)}
        value={this.props.name}
      />
    );
  }
}