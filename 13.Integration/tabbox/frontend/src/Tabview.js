import React from "react";

function TabView({ tabs }) {
  const activeTab = tabs.find((tab) => tab.active) || tabs[0];
  console.log(activeTab);

  return (
    <div>
      <strong>{activeTab.contents}</strong>
    </div>
  );
}

export default TabView;
