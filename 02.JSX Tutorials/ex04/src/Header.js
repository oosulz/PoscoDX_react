import React from "react";

function Header() {
  /*   return (
    <header>
      <h1>Ex04</h1>
      <p>React API로 작성된 함수 컴포넌트</p>
    </header>
  ); */
  return React.createElement(
    "header",
    null,
    React.createElement("h1", null, "Ex04"),
    React.createElement("p", null, "React API로 작성된 함수 컴포넌트")
  );
}

export default Header;
