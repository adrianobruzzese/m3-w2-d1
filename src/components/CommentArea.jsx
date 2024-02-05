import React, { Component } from 'react';
import { ListGroup, Col } from 'react-bootstrap';
import ReviewList from './CommentList'; // Renamed for a fresh perspective
import ReviewForm from './AddComment'; // Renamed for consistency

class ReviewSection extends Component {
  state = {
    reviews: [], // Renamed for clarity
    isLoading: false, // Renamed for consistency
    fetchError: null, // Renamed to be more descriptive
  };

  componentDidMount() {
    this.fetchReviews();
  }

  componentDidUpdate(prevProps) {
    if (this.props.bookId !== prevProps.bookId) {
      this.fetchReviews();
    }
  }

  fetchReviews = async () => {
    const { bookId } = this.props;
    if (!bookId) return;

    this.setState({ isLoading: true, fetchError: null });
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZmFiMmUwODVmYTAwMTk2MzFhZDQiLCJpYXQiOjE3MDcxNDU5MDYsImV4cCI6MTcwODM1NTUwNn0.S5V-6ZHXbTN9uE9w8xihCLELO-TNiwMItmDVNE3cFrM", 
        },
      });
      if (!response.ok) throw new Error("Could not retrieve reviews.");
      const reviewsData = await response.json();
      this.setState({ reviews: reviewsData, isLoading: false });
    } catch (error) {
      this.setState({ fetchError: error, isLoading: false });
    }
  };

  handleNewReview = (newReview) => {
    this.setState(prevState => ({
      reviews: [...prevState.reviews, newReview],
    }));
  };

  render() {
    const { isLoading, fetchError, reviews } = this.state;
    const { bookId } = this.props;

    return (
      <Col md={4}>
        {fetchError && <p>Failed to load reviews: {fetchError.message}</p>}
        {isLoading ? (
          <p>Loading reviews...</p>
        ) : reviews.length > 0 ? (
          <>
            <ListGroup variant="flush">
              <ReviewList reviews={reviews} />
            </ListGroup>
            <ReviewForm bookId={bookId} onReviewAdded={this.handleNewReview} />
          </>
        ) : (
          <p>No reviews to display.</p>
        )}
      </Col>
    );
  }
}

export default ReviewSection;
