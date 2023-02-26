import React from "react";
import "./List.css";
import DescriptionList from "./DescriptionList";
const List = (list) => {
  return (
    <div className="list">
      {list.list.map((item, index) => (
        <div key={index} className="list__item">
          <h3> {item.title}</h3>
          <DescriptionList list={item.description} />
        </div>
      ))}
    </div>
  );
};

export default List;
