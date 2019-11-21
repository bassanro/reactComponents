import React, { Component } from "react";
import classes from "./App.css";
// import Styled from "styled-components";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

// const button = Styled.button`
//   background-color: ${(props) => (props.toggle ? "red" : "green")};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//         background-color: ${(props) =>
//           props.toggle ? "salmon" : "lightgreen"};
//         color: black;
//       }
// `;

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
      showPersons: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App.js: Get Derived state from props", props);
    return state;
  }

  // componentWillMount() {
  //  https://fb.me/react-unsafe-component-lifecycles
  //   //Prepare your state correctly.
  //   console.log("App.js: Component will mount");
  // }

  componentDidMount() {
    console.log("Component did mount");
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

    this.setState({ persons: newPersons });
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
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandle}
          title={this.props.appTitle}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
