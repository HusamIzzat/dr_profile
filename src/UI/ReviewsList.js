import React from "react";
import "./ReviewsList.css";
import Review from "./Review";
const ReviewsList = ({ reviews }) => {
  return (
    <div className="ReviewsList">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewsList;
