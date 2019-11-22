// useEffect is a react hook -> combines use case of all class based lifecycle hook in one React hook.
import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  // Array of string to string. We need to convert array to string to className.

  // Execute every render cycle of cockpit. Like componentDidMount
  useEffect(() => {
    console.log("Cokcpit.js: UseEffect");
    // Can send HTTP request here.

    //Lets execute only when persons change.
    setTimeout(() => {
      alert("Saved data to the cloud");
    }, 1000);
    return () => {
      console.log("Cockpit.js : Cleanup work in userEffect");
    };
  }, []); // If there no change update and we want to only load it
  // once at boot time.THis is like component did mount.
  //}, [props.persons]); // change only when persons change. We can have multiple copies of useEffect()

  // componentDidMount, componentDidUpdate and componentWillUnmount
  // Run for every update cycle.
  useEffect(() => {
    console.log("Cockpit.js : 2nd UseEffect");
    return () => {
      // This will run for every update cycle.
      // Some opearations that should be cancelled whenever the component re-renders.
      console.log("Cockpit.js : cleanup work in 2useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

// memo - store the snapshot and will only re render if component changes
// this is same as shouldComponentUpdate in class Component
export default React.memo(cockpit);
