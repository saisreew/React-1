import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  incr = id => {
    console.log("inside incr() method", id);
    const counters = this.state.counters;
    counters.map(counter => {
      if (counter.id == id) counter.value += 1;
    });
    this.setState({ counters: counters });
  };

  decr = id => {
    //return this.state.count - 1;
    //if (this.state.count > 0) {
    //  this.setState({ count: this.state.count - 1 });
    //}
  };
  render() {
    // state object destructuring
    const { id, value } = this.state.counters;
    return (
      <div>
        {/* Composing components passing data to child components
        {this.state.counters.map(counter => (
          <Counter counters={this.state.counters} />
        ))} */}
        {this.state.counters.map(counter => (
          <Counter
            handleIncrement={this.incr}
            id={counter.id}
            value={counter.value}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
