import React from 'react';
import { useLocation } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const { captureStatus, capturingCop } = location.state;

  return (
    <div>
      <h2>Result</h2>
      {captureStatus ? (
        <p>Fugitive captured successfully by {capturingCop}!</p>
      ) : (
        <p>Fugitive not captured. Try again!</p>
      )}
    </div>
  );
}

export default Result;
