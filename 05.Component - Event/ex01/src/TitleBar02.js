import React from "react";

function TitleBar02() {
  const onClick = function () {
    console.log("TitleBar02 clicked");
  };
  return (
    <div>
      <h4 onClick={onClick}>
        Function Handler in Function Component(Click Here!)
      </h4>
    </div>
  );
}

export default TitleBar02;
