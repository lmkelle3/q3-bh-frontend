import React from "react";
import { Card, Col, Row, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

const Location = props => {
  const locations = useSelector(state => state.locations);
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  console.log("props.location", props.location);

  const handleClick = e => {
    props.displayFilter(props.location.id);
  };

  return (
    <Card className="p-2">
      <Col>
        <Row className="ml-1 mr-1"> Address: {props.location.address}</Row>
        {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>*/}
        <Button color="info" className="btn-sm m-1" onClick={handleClick}>
          View Books at Location
        </Button>
      </Col>
    </Card>
  );
};

export default Location;
