import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route
              exect
              path="/"
              element={
                <News key="home" pagesize={6} country="in" category="" />
              }
            />
            <Route
              exect
              path="/general"
              element={
                <News
                  key="general"
                  pagesize={6}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exect
              path="/business"
              element={
                <News
                  key="business"
                  pagesize={6}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exect
              path="/science"
              element={
                <News
                  key="science"
                  pagesize={6}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exect
              path="/health"
              element={
                <News
                  key="health"
                  pagesize={6}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exect
              path="/sports"
              element={
                <News
                  key="sports"
                  pagesize={6}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exect
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pagesize={6}
                  country="in"
                  category="entertainment"
                />
              }
            />
            {/* 
            <Route
              exect
              path="/About"
              key="About"
              element={
                <News pagesize={6} country="in" category="About" />
              }
            /> */}

            <Route
              exect
              path="/technology"
              key="technology"
              element={<News pagesize={6} country="in" category="technology" />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
