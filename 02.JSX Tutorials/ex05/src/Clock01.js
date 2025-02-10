import React from "react";

function Clock01(props) {
  const now = new Date();

  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  return (
    <div>
      {hour > 10 ? hour : "0" + hour}
      {":"}
      {minute > 10 ? minute : "0" + minute}
      {":"}
      {second > 10 ? second : "0" + second}
    </div>
  );
}

export default Clock01;
