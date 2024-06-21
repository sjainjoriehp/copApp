import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Fugitive Capture</h1>
      <Link to="/city-selection">
        <button>Start Capturing</button>
      </Link>
    </div>
  );
}

export default Home;
