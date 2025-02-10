import React from "react";
import "./assets/css/styles.css";
import data from "./assets/json/data.js";
import Tabs from "./Tabs";
import TabView from "./Tabview";

function App(props) {
  return (
    <div id={"App"}>
      <div className={"tab-box"}>
        <Tabs tabs={data} />
        <TabView tabs={data}></TabView>
      </div>
    </div>
  );
}

export default App;
