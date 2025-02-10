import React, { Component } from "react";
import Header from "./Header";
import Contents from "./Contents";
import Clock03 from "./Clock03";

React.createElement("div", Header, null, React.createElement);

function App() {
  return (
    <div>
      <Header />
      <Contents />
      <Clock03 hour={now.get} minute={30} second={45} />
      <p>함수 컴포넌트</p>
    </div>
  );
}

export { App };
