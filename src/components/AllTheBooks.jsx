import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import romance from '../data/romance.json';
import fantasy from '../data/fantasy.json';
import horror from '../data/horror.json';
import scifi from '../data/scifi.json';
import history from '../data/history.json';


const allBooks = [...fantasy, ...horror, ...scifi, ...history, ...romance];

const BookGallery = () => (
  <Row xs={1} md={3} className="g-4">
    {allBooks.map(({ asin, img, title }) => (
      <Col key={asin}>
        <Card>
          <Card.Img variant="top" src={img} alt={`Cover of ${title}`} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);


export default BookGallery;

