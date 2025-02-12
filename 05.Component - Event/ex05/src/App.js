import React from "react";
import "./assets/scss/App.scss";

export default function App() {
  const outerRef = React.useRef(null);
  const innerRef = React.useRef(null);

  return (
    <div
      className={"App"}
      ref={outerRef}
      onScroll={(e) => {
        console.log(outerRef.current.scrollTop, outerRef.current.clientHeight);
      }}
    >
      <div>
        <ul>
          {Array.from({ length: 100 }, (_, i) => i + 1).map((e) => (
            <li key={e}>{`아이템 ${e}`}</li>
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}
