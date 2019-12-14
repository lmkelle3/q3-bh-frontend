import React from "react";
import EditBookForm from "./EditBookForm";
import NewBookForm from "./NewBookForm";
import BookList from "./BookList/BookList";
import SideNav from "./Navigation/SideNav";

import { Row, Col } from "reactstrap";
import { Route } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Row>
        <Col className="col-4">
          <SideNav />
        </Col>
        <Col>
          <Route path="/main/books" component={BookList} />
          <Route path="/main/form" component={NewBookForm} />
          <Route path="/main/edit/:id" component={EditBookForm} />
        </Col>
      </Row>
    </div>
  );
};
export default Main;
