import React from "react";
import TitleBar02 from "./TitleBar02";

function App() {
  return (
    <div id={"App"}>
      <h1 onClick={() => alert("Hello, Inline Handler!")}>
        Inline Handler(Click Here!)
      </h1>
      <TitleBar02></TitleBar02>
    </div>
  );
}

export default App;
