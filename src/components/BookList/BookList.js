import React from "react";
import Book from "./Book";
import { useSelector } from "react-redux";
import {
  ListGroup,
  Card,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Row,
  Col
} from "reactstrap";
import LocationList from "../LocationList/LocationList";
// import { connect } from "react-redux";

const BookList = () => {
  const books = useSelector(state => state.books);
  const locations = useSelector(state => state.locations);
  const [search, setSearch] = React.useState("");
  const [searchByLocation, setSearchByLocation] = React.useState("");

  const searchBooks = e => {
    setSearchByLocation("");
    setSearch(e.target.value);
  };

  const locationSearch = selectedLocation => {
    console.log("SL", selectedLocation);
    setSearch("");
    setSearchByLocation(selectedLocation);
  };

  let listOfBooks = [];

  if (searchByLocation === "") {
    listOfBooks = books
      .filter(book => book.title.includes(search.charAt(0).toUpperCase()))
      .map(book => <Book book={book} key={book.id} />);
  } else {
    listOfBooks = books
      .filter(book => book.location == searchByLocation)
      .map(book => <Book book={book} key={book.id} />);
  }

  return (
    <div id="book-list">
      <Row>
        <Col className="col-6">
          <Card color="light" className="mt-3">
            <h2 className="text-center m-4">Available Books:</h2>
            <InputGroup className="p-2" size="sm">
              <Input name="search" onChange={searchBooks} />
              <InputGroupAddon addonType="append">
                <InputGroupText>Search By Title</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <ListGroup>{listOfBooks}</ListGroup>
          </Card>
        </Col>
        <Col className="col-6">
          <LocationList displayFilter={locationSearch} />
        </Col>
      </Row>
    </div>
  );
};

export default BookList;
