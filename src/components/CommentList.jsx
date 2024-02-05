import React from "react";
import Review from "./Comment"; 
import { ListGroup } from "react-bootstrap";

const ReviewList = ({ reviews }) => (
  <ListGroup>
    {reviews.map((review) => (
      <ListGroup.Item key={review._id}>
        <Review details={review} />
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default ReviewList;

