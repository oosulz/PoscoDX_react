import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default function App() {
  const getCurrentTime = () => {
    const now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      ticks: 0,
    };
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((currentTime) => getCurrentTime());
      setTicks((ticks) => ticks + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Clock
      title={`ex04: Clock Component II: ${ticks}`}
      hours={currentTime.hours}
      minutes={currentTime.minutes}
      seconds={currentTime.seconds}
    />
  );
}
