import React from "react";

function Header() {
  return (
    <React.StrictMode>
      <div className="menubar">
        <div className="menubar-content">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <div className="site-title" style={{ paddingBottom: "10px" }}>
                    <a href="/#home" style={{ textDecoration: "none" }}>
                      <h3>Ravshanbek Xudayqulov</h3>
                    </a>
                  </div>
                </div>
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="col-md-9 col-sm-9 navbar-style">
                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="/#home" className="active">
                          home
                        </a>
                      </li>
                      <li>
                        <a href="/#about">webdasturlar haqida</a>
                      </li>
                      <li>
                        <a href="/#skill">javascript</a>
                      </li>

                      <li>
                        <a href="/#service">HTML</a>
                      </li>
                      <li>
                        <a href="/#blog">CSS</a>
                      </li>
                      <li>
                        <a href="/#contact">PHP</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Header;
