import React from "react";
import TabItem from "./TabItem";
import "./assets/css/styles.css";

function Tabs({ tabs }) {
  const tabList = [];

  tabs.forEach((tab) => {
    tabList.push(
      <TabItem
        key={tab.no}
        name={tab.name}
        className={tab.active ? "active" : ""}
      />
    );
  });

  return <ul>{tabList}</ul>;
}

export default Tabs;
