import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    let { se , f} = this.props;

    return (
      <div>
        <nav
          className="navbar navbar-expand-lg bg-body-dark"
          style={{ backgroundColor: "black" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" style={{ color: "white" }} to="/">
              NewsHub
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    style={{ color: "white" }}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ color: "white" }}
                    to="/business"
                  >
                    business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ color: "white" }}
                    to="/entertainment"
                  >
                    entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ color: "white" }}
                    to="/general"
                  >
                    general
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ color: "white" }}
                    to="/health"
                  >
                    health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ color: "white" }}
                    to="/science"
                  >
                    science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ color: "white" }}
                    to="/sports"
                  >
                    sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ color: "white" }}
                    to="/technology"
                  >
                    technology
                  </Link>
                </li>
              </ul>
            </div>
            <form class="form-inline my-2 my-lg-0">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                // {...search}
                onChange={(e) => {
                  se(e.target.value);
                  f();
                }}
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
