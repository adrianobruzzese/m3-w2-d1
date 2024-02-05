import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import BooksDisplay from './BookList'; 
import FantasyBooks from '../data/fantasy.json';
import HistoryBooks from '../data/history.json';
import HorrorBooks from '../data/horror.json';
import RomanceBooks from '../data/romance.json';
import SciFiBooks from '../data/scifi.json';
import ReviewsSection from './CommentArea'; 

class CommentsGrid extends Component {
  state = {
    activeBook: null,
  };

  selectBook = (id) => { 
    this.setState({ activeBook: id });
  };

  render() {
    return (
      <div className="my-3"> { /* extra div che forse non serve, vediamo*/ }
        <Row className="justify-content-center">
          {/* Lista libri */}
          <BooksDisplay books={FantasyBooks} onBookSelect={this.selectBook} />
          {/* Commento */}
          <ReviewsSection bookId={this.state.activeBook} />
        </Row>
      </div>
    );
  }
}

export default CommentsGrid;
