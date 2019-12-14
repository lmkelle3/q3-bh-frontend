import React, { useEffect } from "react";
// import logo from './logo.svg';
// import './App.css';
import TopNav from "./components/Navigation/TopNav";
import Login from "./components/Login";
import Main from "./components/Main";

import { getAllBooks } from "./store/books/actions";
import { getAllLocations } from "./store/locations/actions";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
    dispatch(getAllLocations());
  });
  return (
    <div className="App">
      <Router>
        <TopNav />
        <Route exact path="/login" component={Login} />
        <Route path="/main" component={Main} />
      </Router>
    </div>
  );
}

export default App;
