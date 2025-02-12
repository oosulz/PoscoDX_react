import React, { useRef } from "react";
import logo from "./assets/images/react-logo.png";

export default function App() {
  const onKeyUpInput = (e) => {
    if (e.key === "Enter") {
      console.log("Enter key is pressed");
    }
  };

  const onKeyDownInput = (e) => {
    console.log("keydown:" + e.target.value);
  };

  const onChangeInput = (e) => {
    console.log("change:" + e.target.value);
  };

  const onFocusInput = (e) => {
    console.log("focus");
  };

  const onBlurInput = (e) => {
    console.log("blur");
  };

  const onMouseOverImg = (e) => {
    console.log("mouseover", `x=${e.clientX}, y=${e.clientY}`);
  };

  const onMouseMoveImg = (e) => {
    console.log("mousemove", `x=${e.clientX}, y=${e.clientY}`);
  };

  const onMouseOutImg = (e) => {
    console.log("mouseout", `x=${e.clientX}, y=${e.clientY}`);
  };

  const onMouseDownImg = (e) => {
    console.log("mousedown", `x=${e.clientX}, y=${e.clientY}`);
  };

  const onMouseUpImg = (e) => {
    console.log("mouseup", `x=${e.clientX}, y=${e.clientY}`);
  };

  const onClickImg = (e) => {
    console.log("click", `x=${e.clientX}, y=${e.clientY}`);
  };

  const onDoubleClickImg = (e) => {
    console.log("dblclick", `x=${e.clientX}, y=${e.clientY}`);
  };

  const imgRef = useRef(null);

  return (
    <>
      <h2>Event Handler 예제</h2>
      <input
        type="text"
        placeholder="메세지를 입력 하세요"
        onKeyUp={onKeyUpInput}
        onKeyDown={onKeyDownInput}
        onChange={onChangeInput}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
      />
      <br />
      <br />
      <img
        ref={imgRef}
        onMouseOver={onMouseOverImg}
        onMouseMove={onMouseMoveImg}
        onMouseOut={onMouseOutImg}
        onMouseDown={onMouseDownImg}
        onMouseUp={onMouseUpImg}
        onClick={onClickImg}
        onDoubleClick={onDoubleClickImg}
      />
      style=
      {{
        cursor: "pointer",
        width: 190,
        border: "1px solid #ccc",
      }}
      src={logo}
      />
    </>
  );
}
