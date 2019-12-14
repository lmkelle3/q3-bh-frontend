import React from "react";

import { Card, Row, Col, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../store/books/actions";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Book = props => {
  const locations = useSelector(state => state.locations);
  const books = useSelector(state => state.books);
  const [update, setUpdate] = useState([]);
  const dispatch = useDispatch();

  // const handleChange = date => {
  //   this.setState({
  //     startDate: date
  //   });
  // };

  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteBook(props.book.id));
    setUpdate([...update, props.book.id]);
  };

  /////////MATCHING BOOK TO LOCATION//////////

  // Display Location on Book Card

  let locationMatch = [];

  locations.map(location => {
    if (location.id == props.book.location) {
      // locations.filter(location => {
      locationMatch.push(location.address);
    } else if (location.id !== props.book.location) {
      return [location.id];
    }
  });

  return (
    <div>
      <Card body inverse color="info" className="m-1">
        <Row>
          <Col>
            <Row>
              <h5> Title: {props.book.title}</h5>
            </Row>
            <Row>
              <div className="mb-2"> Author: {props.book.author}</div>
            </Row>
            <Row>
              <div className="mb-2"> Description: {props.book.description}</div>
            </Row>
            <Row>
              <div className="mb-2"> Location: {locationMatch}</div>
            </Row>
          </Col>
        </Row>
        <Col>
          <div className="col text-center">
            <Row>
              <Button
                onClick={handleDelete}
                className="btn mr-2 btn-block"
                color="danger"
              >
                Delete
              </Button>
            </Row>
            <Row>
              <Link
                to={{
                  pathname: `/main/edit/${props.book.id}`,
                  state: { book: props.book }
                }}
              >
                <Button className="btn btn-block" color="primary">
                  Edit
                </Button>
              </Link>
            </Row>
          </div>
        </Col>
      </Card>
    </div>
  );
};

export default connect()(Book);
