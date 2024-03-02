import Button from "../Atoms/Button/Button";

interface Tab {
  title: string;
  content: JSX.Element;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  onChange: (index: number) => void;
}

const Tabs = ({ tabs, activeTab, onChange }: TabsProps): React.ReactNode => (
  <div className="tab-buttons">
    {tabs.map((tabs, index) => (
      <Button
        key={index}
        label={tabs.title}
        active={index === activeTab}
        onClick={() => onChange(index)}
      />
    ))}
  </div>
);
export default Tabs;
