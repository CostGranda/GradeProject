import React from "react";

export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.perceptio.co/wp-content/uploads/2018/12/cropped-logo.png"
            width="200"
            height="40"
            className="d-inline-block align-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Data Base <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Alarms
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="https://media.glassdoor.com/sqll/919617/perceptio-squarelogo-1542197061380.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Help
                </a>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
