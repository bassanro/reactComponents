// functional component
import React, { PureComponent } from "react";
import Person from "./Person/Person";

// Functional components don't have state and are not inhertited form Components.
// They take props are return  JSX.

// Presentational/class based components have state and are inherited from Components.

class Persons extends PureComponent {
  // static getDerivedStateFromProps(pros, state) {
  //   console.log("Persons.js: getDerivedStateFromProps ");
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("Perons.js: componentWillReceiveProps", props);
  // }

  // This is taken by the PureComponent update.
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Persons.js: shouldComponentUpdate");
  //   // Return true if React should continue updating.

  //   // Since persons component didn't change we should not re-render here.
  //   // This is great performance optimization.
  //   // We are comparing pointers since array are pointers.
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else return false;
  // }

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
