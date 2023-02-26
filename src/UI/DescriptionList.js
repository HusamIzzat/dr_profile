import React from "react";
import "./DescriptionList.css";
const DescriptionList = (props) => {
  const list = props.list;
  return (
    <ul className="list_desc">
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default DescriptionList;
