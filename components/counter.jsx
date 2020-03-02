import React, { Component } from "react";

class Counter extends Component {
  render() {
    // console.log(this.props.id, this.props.count);
    // props object destructuring
    const { id, value, handleIncrement } = this.props;

    return (
      <div>
        <button className="btn btn-warning btn-sm">Decrement</button>
        <span className="badge badge-primary">{value}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => handleIncrement(id)}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
