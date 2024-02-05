import React from "react";
import { Button } from "react-bootstrap";

const Comment = ({ details }) => {
  const handleDelete = async (commentId) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZmFiMmUwODVmYTAwMTk2MzFhZDQiLCJpYXQiOjE3MDcxNDU5MDYsImV4cCI6MTcwODM1NTUwNn0.S5V-6ZHXbTN9uE9w8xihCLELO-TNiwMItmDVNE3cFrM", 
        },
      });
      if (!response.ok) throw new Error("Failed to remove the review.");
      alert("Review successfully removed!");
    } catch (error) {
      console.error("Deletion error:", error);
      alert("Could not delete the review. Please try again.");
    }
  };

  // Generates stars based on the rating
  const generateRatingStars = (rating) => "⭐".repeat(rating);

  return (
    <div>
      <p className="text-muted">"{details.comment}"</p>
      <div>{generateRatingStars(details.rate)}</div>
      <Button variant="warning" onClick={() => handleDelete(details._id)}>
        Remove
      </Button>
    </div>
  );
};

export default Comment;
