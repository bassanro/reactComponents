import React from "react";

// Function which returns the function component.
// Make a copy(spread ..)  of props and wraps it as key value pairs.
const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};
export default withClass;
