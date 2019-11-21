//import React, { Component } from 'react';
import React, { useState } from "react";
import "./App.css";

import Person from "./Person/Person";

// IF state changes or props changes then DOM would be re-redered.
//class App extends Component {

const App = (props) => {
  // Pass your initial state. It returns 2 elements. 1) Current state or updated stated 2) function which allows to update the state
  // such that the component is rendered again.
  const [personsState, setPersonsState] = useState({
    // state property in Class based Components. - Managed inside the component.
    // If state changes, then React would re-rednder the DOM.
    persons: [
      { name: "Max", age: 28 },
      { name: "Roshan", age: 29 },
      { name: "Rivaan", age: 3 }
    ],
    otherState: "This is some other state"
  });

  const [otherState, setOtherState] = useState("This is some other state");

  // Don't call this directly using() since that will trigger it immediately once the DOM is rendered.
  // which we want only when the button was clicked.

  // We can have function inside functions. [Here used in context of React Hooks]
  const switchNameHandler = () => {
    //console.log("Console log was clicked.");
    // Don't do this :: personsState.persons[0].name = "ROSHAN BASSAN";
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Roshan Bassan", age: 29 },
        { name: "Rivaan", age: 30 }
      ]
    });
  };

  return (
    <div className="App">
      <h1> Hi, I am a react App </h1>
      <p>This is really working</p>

      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        {" "}
        My Hobbies: Racing{" "}
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // Nested react element.
  // return React.createElement('div', { className: 'App' } , React.createElement('h1', null, 'Hi I am a React App!!!'));
};

export default App;
