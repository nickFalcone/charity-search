import React from 'react';
import { render } from 'react-dom';
// import { Link, Router } from '@reach/router';
import Search from './Search';

const App = () => {
  return (
    <div>
      <header>{/* <Link to="/">Home</Link> */}</header>
      {/* <Router>
        <Search path="/" />
      </Router> */}
      <Search />
    </div>
  );
};

render(<App />, document.getElementById('root'));
