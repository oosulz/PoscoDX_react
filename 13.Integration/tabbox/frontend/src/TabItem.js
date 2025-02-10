import React from "react";

function TabItem({ name, className }) {
  return <li className={`tab-item ${className}`}>{name}</li>; // ✅ className 적용
}

export default TabItem;
