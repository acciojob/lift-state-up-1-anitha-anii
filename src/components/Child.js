import React from 'react';

const Child = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={props.onButtonClick}>Show Modal</button>
    </div>
  );
};

export default Child;
 