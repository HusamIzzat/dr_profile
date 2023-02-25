import React from "react";
import "./Tabs.css";
import { useState } from "react";
import ReviewsList from "./ReviewsList";

const Tabs = ({ tabs }) => {
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
        {typeof tabs[activeTab].content === "string" ? (
          <div className="tabs__content__item">{tabs[activeTab].content}</div>
        ) : (
          <ReviewsList reviews={tabs[activeTab].content} />
        )}
      </div>
    </div>
  );
};
export default Tabs;
