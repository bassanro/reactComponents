import React, { Component } from "react";

import classes from "./Person.css";
import Aux from "../../../hoc/Auxillary";
import withclass from "../../../hoc/withClass";

class Person extends Component {
  render() {
    console.log("Person.js Rendering");
    return (
      <Aux>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old.{" "}
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default withclass(Person, classes.Person);
