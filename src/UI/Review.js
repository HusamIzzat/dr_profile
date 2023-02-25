import React from "react";
import "./Review.css";
import { BsFillPersonFill } from "react-icons/bs";
import StasRating from "./StarsRating";
const Review = ({ review }) => {
  return (
    <div className="Review">
      <div className="Review__header">
        <BsFillPersonFill class="person" />
        <div className="block_rate">
          <span>{review.name}</span>
          <StasRating rate={review.rate} time={review.time} />
        </div>
      </div>
      <div className="Review__content">{review.review}</div>
    </div>
  );
};

export default Review;
