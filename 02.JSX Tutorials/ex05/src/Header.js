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
    React.createElement("h1", null, "Ex06"),
    React.createElement("p", null, "특징 6: JSX 표현식 사용")
  );
}

export default Header;
