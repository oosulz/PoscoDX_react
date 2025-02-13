import { Tab_Box } from "tabbox";
import React, { useState } from "react";
import Tabs from "./Tabs";
import TabItem from "./TabItem";
import TabView from "./TabView";
import data from "./assets/json/data.js";

function TabBox(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const selectTab = (no) => {
    console.log(`selectTab: ${no}`);

    const index = data.findIndex((e) => e.no === no);
    console.log(`index: ${index}`);
  };

  return (
    <div className="Tab_Box">
      <Tabs
        selectTab={selectTab}
        tabs={data.map((e, index) => {
          const { contents, ...rest } = e; // contents 제외한 나머지 속성들을 rest에 할당

          if (index === activeIndex) {
            rest.active = true;
          }

          return rest;
        })}
      />
      <TabView />
    </div>
  );
}
