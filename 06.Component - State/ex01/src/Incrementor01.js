import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 10,
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={
            () =>{}
              this.setState({
                count: count + 1,
              })
            // anti pattern
            //this.state.count += 1;
            //this.forceUpdate
          }
        >
          {"+"}
        </button>{" "}
        {0} <button>{"-"}</button>
      </div>
    );
  }
}
