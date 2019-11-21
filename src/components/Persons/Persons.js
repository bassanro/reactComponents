// functional component
import React from "react";
import Person from "./Person/Person";

// Functional components don't have state and are not inhertited form Components.
// They take props are return  JSX.

// Presentational/class based components have state and are inherited from Components.

const persons = (props) => {
  console.log("Persons.js Rendering....");
  return props.persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        click={() => props.clicked(index)}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
      />
    );
  });
};

export default persons;
