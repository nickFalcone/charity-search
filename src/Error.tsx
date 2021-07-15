import React from 'react';

const Error = (props) => {
  if (props.error)
    return (
      <div className="error">
        <h2>Service error :(</h2>
      </div>
    );
  return null;
};

export default Error;
