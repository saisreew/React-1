import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    totalItems: 0,
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  incr = id => {
    console.log("inside incr() method", id);
    // this.setState({ totalItems: (this.state.totalItems += 1) });
    const counters = this.state.counters;
    counters.map(counter => {
      if (counter.id == id) counter.value += 1;
    });
    this.setState({ counters: counters });
  };

  decr = id => {
    const counters = this.state.counters;
    //this.setState({ totalItems: (this.state.totalItems -= 1) });
    counters.map(counter => {
      if (counter.id == id && counter.value > 0) counter.value -= 1;
    });
    this.setState({ counters });
  };

  reset = () => {
    const counters = this.state.counters;
    counters.map(counter => (counter.value = 0));
    this.setState({ counters });
    this.setState({ totalItems: 0 });
  };
  onDelete = id => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters });
  };

  render() {
    const { id } = this.state.counters;
    return (
      <div>
        <NavBar totalItems={this.state.totalItems} />
        <button
          className="btn btn-danger px-5 btn-sm my-2"
          onClick={this.reset}
        >
          Reset
        </button>
        <Counters
          key={id}
          handleIncrement={this.incr}
          handleDecrement={this.decr}
          handleRemove={this.onDelete}
          counters={this.state.counters}
          totalItems={this.state.counters.length}
        />
      </div>
    );
  }
}

export default App;
