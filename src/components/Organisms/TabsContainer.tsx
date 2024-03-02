import { useState } from "react";
import Tabs from "../Molecules/Tabs";

interface TabsContainerProps {
  tabs: {
    title: string;
    content: JSX.Element;
  }[];
}

const TabsContainer = ({ tabs }: TabsContainerProps): React.ReactNode => {
  const [activeTab, setActive] = useState(0);

  const handelTabChange = (index: number) => {
    setActive(index);
  };
  return (
    <div className="tab-container">
      <Tabs tabs={tabs} activeTab={activeTab} onChange={handelTabChange} />
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};
export default TabsContainer;
