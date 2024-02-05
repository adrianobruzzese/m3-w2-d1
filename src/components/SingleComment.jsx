import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const CommentItem = ({ review }) => {
  const removeReview = async (reviewId) => {
    try {
      const result = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${reviewId}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZmFiMmUwODVmYTAwMTk2MzFhZDQiLCJpYXQiOjE3MDcxNDU5MDYsImV4cCI6MTcwODM1NTUwNn0.S5V-6ZHXbTN9uE9w8xihCLELO-TNiwMItmDVNE3cFrM', 
        },
      });
      if (result.ok) {
        alert('Review successfully deleted!');
      } else {
        throw new Error('Failed to delete the review.');
      }
    } catch (error) {
      console.error('Deletion error:', error);
      alert('Error deleting review: ' + error.message);
    }
  };

  return (
    <ListGroup.Item>
      {review.comment}
      <Button variant="outline-danger" className="float-end" onClick={() => removeReview(review._id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default CommentItem;

