/**
 * Tabs component allows user to view content in multiple tabs.
 * @module Tabs
 * @param {array} props.tabsData - An array of items to be displayed in the tabs. Each item should be an object with a `title`, `content`. Optional fields include `tabColor` and `contentBackgroundColor`. `tabColor` sets the color of the individual tab. `contentBackgroundColor` sets the color of the background for the content.
 * @param {string} props.indicatorColor - The color of the active tab indicator.
 * @param {string} props.wrapperBackground - The color of the background for the wrapper.
 * @param {number} props.titleSize - The font size for the tab titles.
 * @param {number} props.contentSize - The font size for the content.
 * @return {JSX.Element} - A JSX element representing the Tabs component.
 */

import { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ tabsData, indicatorColor, wrapperBackground, titleSize, contentSize, width }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    return (
      <div className="wrapper" style={{ backgroundColor: wrapperBackground, maxWidth: `100%`, width: `${width}%` }}>
        <div style={{ display: 'flex' }}>
          {tabsData.map((tab, index) => (
            <div className='tab-title' key={index} onClick={() => setActiveTab(index)} style={{ cursor: 'pointer', padding: '10px 15px', borderBottom: activeTab === index ? `2px solid ${indicatorColor}` : '', backgroundColor: tab.tabColor || '#c4c0c0', fontSize: `${titleSize}px`}}>
              {tab.title}
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: tabsData[activeTab].contentBackgroundColor || '#ebe8e8', padding: '10px', fontSize: `${contentSize}px` }}>
          {tabsData[activeTab].content}
        </div>
      </div>
    );
  };

Tabs.propTypes = {
  tabsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      tabColor: PropTypes.string,
      contentBackgroundColor: PropTypes.string,
    })
  ).isRequired,
  indicatorColor: PropTypes.string,
  wrapperBackground: PropTypes.string,
  titleSize: PropTypes.number,
  contentSize: PropTypes.number
};

Tabs.defaultProps = {
    indicatorColor: '#fc0303',
    wrapperBackground: '#c4c0c0',
    titleSize: 20,
    contentSize: 15,
    width: `100%`
  };

export default Tabs;
