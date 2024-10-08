import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand page-scroll" href="#page-top">
        <img src="img/logo.png" alt="Logo HIKA" style={{ height: '30px' }} />
      </a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="#" className="page-scroll">
            HOME
          </a>
        </li>
        <li>
          <a href="#about" className="page-scroll">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#services" className="page-scroll">
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#portfolio" className="page-scroll">
            GALLERY
          </a>
        </li>
        {/* 
        <li>
          <a href="#testimonials" className="page-scroll">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#team" className="page-scroll">
            Team
          </a>
        </li>
        */}
        <li>
          <a href="#contact" className="page-scroll">
            CONTACTS
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};
