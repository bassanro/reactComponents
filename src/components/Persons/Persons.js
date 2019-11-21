// functional component
import React, { Component } from "react";
import Person from "./Person/Person";

// Functional components don't have state and are not inhertited form Components.
// They take props are return  JSX.

// Presentational/class based components have state and are inherited from Components.

class Persons extends Component {
  // static getDerivedStateFromProps(pros, state) {
  //   console.log("Persons.js: getDerivedStateFromProps ");
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("Perons.js: componentWillReceiveProps", props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Persons.js: shouldComponentUpdate");
    // Return true if React should continue updating.
    return true;
  }

  //Save the snapshot before changes and can be used later.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Persons.js: getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  // Use the snapshot saved above. 
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Persons.js: Components did update");
    console.log(snapshot);
  }

  // We can do all cleanup activity.
  componentWillUnmount() { 
    console.log("Persons.js: componentWillUnmount");
  }

  render() {
    console.log("Persons.js Rendering....");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
