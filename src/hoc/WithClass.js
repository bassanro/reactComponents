import React from "react";

// Function which returns the function component.
const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};
export default withClass;
