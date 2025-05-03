import React from "react";

function withGreetiung(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div>
        <h1>Welcome to the HOC Example</h1>
        <WrappedComponent {...props} />
      </div>
    );
  };
}
export default withGreetiung;
