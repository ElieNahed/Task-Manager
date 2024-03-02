import React from "react";
import TabsContainer from "../Organisms/TabsContainer";

const tabs = [
  { title: "Tab 1", content: <div>Content of Tab 1</div> },
  { title: "Tab 2", content: <div>Content of Tab 2</div> },
  { title: "Tab 3", content: <div>Content of Tab 3</div> },
];

const Tabspage: React.FC = () => (
  // Change React.ReactNode to React.FC
  <div>
    <h1>My Page</h1> {/* Changed 'my page' to 'My Page' */}
    <TabsContainer tabs={tabs} />
  </div>
);
export default Tabspage;
