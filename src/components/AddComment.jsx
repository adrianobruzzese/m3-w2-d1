import React, { Component } from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';

class AddComment extends Component {
  state = {
    commentText: "",
    rate: 1,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { commentText, rate } = this.state;
    const { bookId, onCommentAdded } = this.props;

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify({
          commentText,
          rate,
          elementId: bookId,
        }),
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZmFiMmUwODVmYTAwMTk2MzFhZDQiLCJpYXQiOjE3MDcxNDU5MDYsImV4cCI6MTcwODM1NTUwNn0.S5V-6ZHXbTN9uE9w8xihCLELO-TNiwMItmDVNE3cFrM",
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        alert("Commento inviato!");
        const newComment = await response.json();
        onCommentAdded(newComment);
        this.setState({ commentText: "", rate: 1 });
      } else {
        alert("Failed to submit comment. Please try again.");
      }
    } catch (error) {
      alert(error.message);
      console.error("Errore durante la pubblicazione", error);
    }
  };

  render() {
    const { commentText, rate } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup className="mb-2">
          <Form.Label>Aggiungi la tua recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Scrivi qualcosa..."
            value={commentText}
            onChange={this.handleInputChange}
            name="commentText"
            required
          />
        </FormGroup>

        <FormGroup className="mb-2">
          <Form.Label>Voto</Form.Label>
          <Form.Control
            as="select"
            value={rate}
            onChange={this.handleInputChange}
            name="rate"
          >
            {[1, 2, 3, 4, 5].map(rate => (
              <option key={rate} value={rate}>{rate}</option>
            ))}
          </Form.Control>
        </FormGroup>

        <Button variant="primary" type="submit">
          Aggiungi Commento
        </Button>
      </Form>
    );
  }
}

export default AddComment;
