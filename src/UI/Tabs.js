import React from "react";
import "./Tabs.css";
import { useState } from "react";
import ReviewsList from "./ReviewsList";
import List from "./List";

const Tabs = ({ tabs }) => {
  console.log(tabs);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs__header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tabs__header__item ${
              activeTab === index ? "tabs__header__item--active" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tabs__content">
        {tabs[activeTab].title !== "Reviews" ? (
          <List list={tabs[activeTab].content} />
        ) : (
          <ReviewsList reviews={tabs[activeTab].content} />
        )}
      </div>
    </div>
  );
};
export default Tabs;
