import React, { Component } from "react";

class Counter extends Component {
  render() {
    // console.log(this.props.id, this.props.count);
    // props object destructuring
    const { id, value, handleIncrement, handleDecrement } = this.props;

    return (
      <div>
        <button
          className="btn btn-warning btn-sm ml-1"
          onClick={() => handleDecrement(id)}
          disabled={value === 0 ? "disabled" : ""}
        >
          <i className="fas fa-minus"></i>
        </button>
        <span className="badge badge-primary m-1 p-2">{value}</span>
        <button
          className="btn btn-secondary btn-sm mr-1"
          onClick={() => handleIncrement(id)}
        >
          <i className="fas fa-plus"></i>
        </button>
        <button
          className="btn btn-sm btn-outline-info"
          onClick={() => this.props.handleRemove(id)}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    );
  }
}

export default Counter;
