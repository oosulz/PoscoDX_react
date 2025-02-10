import React from "react";
import Header from "./Header";
import Contents from "./Contents";

React.createElement("div", Header, null, React.createElement);

function App() {
  return (
    <div>
      <Header />
      <Contents />
      <p>함수 컴포넌트</p>
    </div>
  );
}

export { App };
