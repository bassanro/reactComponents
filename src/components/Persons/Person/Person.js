//ES6 scripts

import React from "react";
//import "./Person.css";
// import styled from "styled-components";
import classes from "./Person.css";

//import className from "./Person.css";

// const div = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid red;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 500px) {
//     width: "450px";
//   }
// `;

// React passes default attributes/properties to the component.
// children are value between the component tags. (can be HTML as well)
// props  allow you to pass data from a parent (wrapping) component to a child (embedded) component.

const person = (props) => {
  console.log("Person.js Rendering");
  // return <p>I'm a person and I am { Math.floor(Math.random() * 30) }  years old. !</p>
  return (
    // <div className="Person">
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old.{" "}
      </p>
      <p>{props.children}</p>
      {/* Two way binding here. */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
