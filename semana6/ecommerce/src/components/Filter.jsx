import React from "react";
import "../styles/filter.css";
import "../styles/mobile.css";

class Filter extends React.Component {
  render() {
    return (
      <div className="filterContainer">
        <h2>Filters</h2>
        <label>Min. price</label>
        <input
          type="number"
          value={this.props.valueMinPrice}
          onChange={this.props.onChangeMinPrice}
        />
        <label>Max. price</label>
        <input
          type="number"
          value={this.props.valueMaxPrice}
          onChange={this.props.onChangeMaxPrice}
        />
        <label>Search Product</label>
        <input
          type="text"
          value={this.props.valueSearchProduct}
          onChange={this.props.onChangeSearchProduct}
        />
      </div>
    );
  }
}

export default Filter;
