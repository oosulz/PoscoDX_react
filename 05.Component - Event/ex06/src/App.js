import React, { Component } from "react";
import "./assets/scss/App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.outerRef = null; // 초기화
    this.innerRef = null;
  }

  render() {
    return (
      <div
        className={"App"}
        ref={(ref) => (this.outerRef = ref)}
        onScroll={(e) => {
          console.log(
            this.outerRef.scrollTop,
            this.outerRef.clientHeight,
            this.innerRef.scrollTop,
            this.innerRef.clientHeight
          );
        }}
      >
        <div>
          <ul ref={(ref) => (this.innerRef = ref)}>
            {Array.from({ length: 100 }, (_, i) => i + 1).map((e) => (
              <li key={e}>{`아이템 ${e}`}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
