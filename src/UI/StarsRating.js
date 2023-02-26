import React from "react";
import "./StarsRating.css";
import { AiTwotoneStar } from "react-icons/ai";
const StasRating = (props) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <AiTwotoneStar
            key={index}
            className={index <= props.rate ? "on" : "off"}
          />
        );
      })}
      {props.reviews && ` (${props.reviews}  reviews)`}
      {props.time && <span className="time">{props.time} ago</span>}
    </div>
  );
};
export default StasRating;
