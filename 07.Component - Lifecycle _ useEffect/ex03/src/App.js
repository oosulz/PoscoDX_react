import React, { Component } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.__getCurrentTime();
  }

  __getCurrentTime() {
    const now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      ticks: this.state ? this.state.ticks + 1 : 1,
    };
  }

  componentDidMount() {
    // 컴포넌트가 마운트된 직후에 호출
    // 1초마다 현재 시간을 갱신
    // componentDidMount()에서 setInterval을 호출하여 1초마다 현재 시간을 갱신하도록 설정
    this.intervalId = setInterval(() => {
      this.setState(this.__getCurrentTime());
    }, 1000);
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트되기 직전에 호출
    // setInterval을 해제
    console.log("App.componentWillUnmount");
    clearInterval(this.intervalId);
  }

  render() {
    return this.state.ticks % 5 === 0 ? null : (
      <Clock
        title={`ex03: Clock Component I: ${this.state.ticks}`}
        hours={this.state.hours}
        minutes={this.state.minutes}
        seconds={this.state.seconds}
      />
    );
  }
}
