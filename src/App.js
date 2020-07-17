import React from 'react';
import './App.css';
import Vectors from './vectora';

function App() {
  return (
    <div>
      <h1>Linear Independence</h1>
      <h4>What is linear independence?</h4>
      <p>Linear independence is an import concept in mathematics, in particular it is very important in the study of Linear Algebra.
        Let us take a look at the two dimensional case. If two vectors are linearly independent, they can be used to generate the entire plane.
      </p>
      <Vectors />
    </div>
  );
}

export default App;
