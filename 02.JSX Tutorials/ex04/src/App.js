import React, { useReducer } from "react";
import Header from "./Header";
import Contents from "./Contents";

React.createElement("div", Header, null, React.createElement);

function App() {

    const refDiv = useRef(null);

     return (
    <div
      id="App"
      ref={refDiv}>
      {'TEST01'}
    </div>
  ); 
  /*
  return React.createElement(
    "div",
    { id: "App" },
    React.createElement(Header, null),
    React.createElement(Contents, null),
    React.createElement("p", null, "함수 컴포넌트")
  );
}
*/
export { App };
