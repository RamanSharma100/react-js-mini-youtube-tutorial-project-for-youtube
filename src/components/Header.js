import React, { useState } from 'react';

const Header = (props) => {
  //input data
  const [text, setText] = useState('');
  //on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    props.search(text);
  };
  return (
    <div className="container-fluid botder-bottom-1 shadow">
      <div className="col-md-12 pt-1 pb-0">
        <nav className="navbar">
          <a className="navbar-brand font-weight-bold text-dark" href="/">
            MINIYOUTUBE
          </a>
          <form className="col-md-7" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group d-flex">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search Here..."
                className="form-control col-md-10"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <input
                type="submit"
                value="Search"
                className="btn btn-primary col-md-1 ml-1"
              />
            </div>
          </form>
          <p>
            Welcome, <span className="text-primary">Guest</span>
          </p>
        </nav>
      </div>
    </div>
  );
};

export default Header;
