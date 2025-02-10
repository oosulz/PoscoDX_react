import React from "react";

function App() {
  React.createElement(
    "div",
    null,
    "Hello World",
    React.createElement("div", null, "test")
  );

  return (
    <div>
      Hello World
      <div>test</div>
    </div>
  );
}

export { App };
