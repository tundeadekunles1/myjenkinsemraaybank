import React from 'react';

function TestEnv() {
  return (
    <div>
      <h2>Environment Variable Test</h2>
      <p>API URL: {process.env.REACT_APP_API_URL}</p> 
    </div>
  );
}

export default TestEnv;