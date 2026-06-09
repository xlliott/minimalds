import './Tabgroup.css';
import Tab from '../Tab/Tab';

/**
 * MinimalDS — Tab Group
 *
 * Props:
 *   tabs          — array of strings (tab labels)
 *   selectedIndex — number (index of selected tab)
 *   onChange      — function(index) called when a tab is clicked
 */

export default function TabGroup({
  tabs = [],
  selectedIndex = 0,
  onChange,
}) {
  return (
    <div className="mds-tab-group" role="tablist">
      {tabs.map((label, index) => (
        <Tab
          key={index}
          label={label}
          selected={index === selectedIndex}
          onClick={() => onChange && onChange(index)}
        />
      ))}
    </div>
  );
}
