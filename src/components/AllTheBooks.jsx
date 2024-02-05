import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import BookDisplay from './SingleBook'; 
import ReviewsSection from './CommentArea'; 

class BooksCatalog extends Component {
  state = {
    searchQuery: "",
    activeBookId: null, 
    bookComments: [], 
  };

  updateActiveBook = (bookId) => {
    this.setState({ activeBookId: bookId });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeBookId !== this.state.activeBookId) {
      this.loadComments();
    }
  }

  loadComments = () => {
    const apiUrl = `https://striveschool-api.herokuapp.com/api/comments/${this.state.activeBookId}`;
    fetch(apiUrl, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZmFiMmUwODVmYTAwMTk2MzFhZDQiLCJpYXQiOjE3MDcxNDU5MDYsImV4cCI6MTcwODM1NTUwNn0.S5V-6ZHXbTN9uE9w8xihCLELO-TNiwMItmDVNE3cFrM",
      },
    })
      .then(response => response.ok ? response.json() : Promise.reject("Failed to load comments"))
      .then(comments => this.setState({ bookComments: comments }))
      .catch(error => console.error("Error fetching comments:", error));
  };

  render() {
    const { searchQuery, activeBookId, bookComments } = this.state;
    const { arrayOfBooks } = this.props; 

    return (
      <div>
        <Form.Control
          placeholder="Search for a book..."
          value={searchQuery}
          onChange={e => this.setState({ searchQuery: e.target.value })}
        />
        <Container fluid>
          <Row>
            <Col>
              <Row>
                {arrayOfBooks.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(book => (
                    <BookDisplay
                      bookDetails={book} 
                      key={book.asin}
                      isActive={activeBookId === book.asin} 
                      onSelectBook={this.updateActiveBook}
                    />
                  ))}
              </Row>
            </Col>
            <Col xs={6}>
              {activeBookId && <ReviewsSection bookId={activeBookId} comments={bookComments} />}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BooksCatalog;
