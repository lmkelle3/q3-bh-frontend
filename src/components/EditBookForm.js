import React from "react";
import { Card, Button, Form, FormGroup, Label, Input, Row } from "reactstrap";
import { editBook } from "../store/books/actions";
import { useDispatch } from "react-redux";

const EditBookForm = props => {
  console.log("P2:", props);
  const dispatch = useDispatch();

  const [inputs, setInputs] = React.useState({
    title: "",
    author: "",
    description: "",
    location: ""
  });

  const handleChange = e => {
    let { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editBook(props.location.state.book.id, inputs));
    window.location.replace("http://localhost:3000/main");
  };

  console.log("PROPS:", props.location);

  return (
    <div className="container">
      <Card color="light" className="m-3">
        <h3 className="mt-4 ml-2 text-center">Edit Book:</h3>
        <Form onSubmit={handleSubmit} className="ml-2 mr-2">
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              value={inputs.title}
              onChange={handleChange}
              id="title"
              placeholder="Title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="author">Author</Label>
            <Input
              type="text"
              name="author"
              value={inputs.author}
              onChange={handleChange}
              id="author"
              placeholder="Author"
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              value={inputs.description}
              onChange={handleChange}
              id="description"
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">Select Location</Label>
            <Input
              type="select"
              name="location"
              value={inputs.location}
              onChange={handleChange}
              id="location"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          {/* <FormGroup>
          <Label for="photo">Upload a Photo!</Label>
          <Input type="photo" name="photo" id="photo" />
          <FormText color="muted">
            Snap a photo of the book you are adding!
          </FormText>
        </FormGroup>{" "} */}
          <Row>
            <div className="col text-center">
              <Button className="m-2 btn-center" type="submit" color="info">
                Update Book!
              </Button>
            </div>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default EditBookForm;
