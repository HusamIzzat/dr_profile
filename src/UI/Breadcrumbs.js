import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import "./Breadcrumbs.css";
import Container from "./Container";

const Breadcrumbs = ({ items }) => {
  const itemLength = items.length;
  return (
    <div className="breadcrumbs">
      <Container>
        <div className="breadcrumbs__container">
          <div className="breadcrumbs__item">
            <AiOutlineHome /> Home
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              className={`breadcrumbs__item ${
                index === itemLength - 1 ? "current" : ""
              }`}
            >
              <span className="separator">/</span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
