import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // props object destructuring
    const { id, value } = this.props.counters;
    return (
      <div>
        {/* Composing components passing data to child components
        {this.props.counters.map(counter => (
          <Counter counters={this.props.counters} />
        ))} */}
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            handleIncrement={this.props.handleIncrement}
            id={counter.id}
            value={counter.value}
            handleDecrement={this.props.handleDecrement}
            handleRemove={this.props.handleRemove}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
