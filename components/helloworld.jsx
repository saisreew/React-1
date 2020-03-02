//imrc - import React {Component}
// cc - create class
import React, { Component } from "react";
import { useLayoutEffect } from "react";

class HelloWorld extends Component {
  state = {
    count: 0,

    // links: ["link1", "link2", "link3"]
    links: [
      { id: 1, name: "Google", url: "http://www.google.com" },
      { id: 2, name: "Yahoo", url: "http://www.yahoo.com" },
      { id: 3, name: "Facebook", url: "http://www.facebook.com" }
    ],
    students: [
      { rollNo: 101, name: "Ram", age: 10, std: 5 },
      { rollNo: 102, name: "Sam", age: 10, std: 5 },
      { rollNo: 103, name: "Jhon", age: 10, std: 5 },
      { rollNo: 104, name: "Rani", age: 10, std: 5 }
    ]
  };

  styles = {
    margin: "2px",
    fontSize: "18px",
    fontFamily: "cursive",
    padding: "2px"
  };
  render() {
    if (this.state.students.length == 0) {
      return (
        <p className="alert alert-danger">* Couldn't find students in db!</p>
      );
    }
    return (
      <div>
        <ul>
          {this.state.links.map(link => (
            <li key={link.id}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
        <h1>Hello World</h1>
        <button
          style={this.styles}
          className="btn btn-warning"
          onClick={this.decr}
        >
          Decrement
        </button>
        <span className="m-2 p-2 badge badge-primary">{this.state.count}</span>
        <button
          style={{ padding: "2px", fontSize: "18px" }}
          className="btn btn-secondary"
          onClick={this.incr}
        >
          Increment
        </button>
        {/* table.table>thead>tr>th*4
        // tbody>tr>td*4 */}
        <table className="table">
          <thead>
            <tr>
              <th>RollNo</th>
              <th>Name</th>
              <th>Age</th>
              <th>Standard</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map(student => (
              <tr key={student.rollNo}>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.std}</td>
                <td>
                  <button
                    // onClick={this.delete()}
                    onClick={() => this.delete(student)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

    // return React.createElement("h1", {}, "Hello World" );
  }
  delete = student => {
    const students = this.state.students.filter(
      std => student.rollNo !== std.rollNo
    );

    this.setState({ students: students });
  };

  incr = () => {
    //return this.state.count + 1;
    this.setState({ count: this.state.count + 1 });
  };

  decr = () => {
    //return this.state.count + 1;
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
}

export default HelloWorld;
