import React, { Component } from "react";
import classes from "./App.css";
// import Styled from "styled-components";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// Now this is a normal function which doesn' return a function.
import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxillary";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.Js constructor");
    this.state = {
      persons: [
        { id: "a", name: "Max", age: 28 },
        { id: "b", name: "Roshan", age: 29 },
        { id: "c", name: "Rivaan", age: 3 }
      ],
      otherState: "some other value",
      showPersons: false,
      showCockpit: true,
      changeCounter: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App.js: Get Derived state from props", props);
    return state;
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  // state changes.
  componentDidUpdate() {
    console.log("App.js: Component did update.");
  }

  // Performace improvement to check if update is really required.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("App.js: Should Component update");
    return true;
  }

  // person is reference/poiter to original state,
  // so we have mutated the original state. 1) Slice creates a copy.
  // 2. Create a new array using spread opearting rule.
  deleteHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const updatedPersons = [...this.state.persons];
    updatedPersons.splice(personIndex, 1);
    this.setState({ persons: updatedPersons });
  };

  // SetState is not guarenteed to finish immediately.
  // For large applications it might be older state, like changeCounter.
  // Hence depended on old state. See prevState
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const updatedPerson = {
      ...this.state.persons[personIndex]
    };

    updatedPerson.name = event.target.value;
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = updatedPerson;

    this.setState((prevState, props) => {
      return {
        persons: newPersons,
        //changeCounter: this.state.changeCounter + 1
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePersonsHandle = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("App.js: Render");
    // It's not a class property and not a class state.
    // So this is not required.

    // key property should be defined so that the entire list is not rendered.
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deleteHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Aux classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}>
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandle}
            title={this.props.appTitle}
          />
        ) : null}
        {persons}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
