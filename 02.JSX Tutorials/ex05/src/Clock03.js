import React from "react";

function Clock03(hour, minute, second) {
  return (
    <div>
      {("0" + hour).slice(-2)}
      {":"}
      {("0" + minute).slice(-2)}
      {":"}
      {("0" + second).slice(-2)}
    </div>
  );
}

export default Clock03;
