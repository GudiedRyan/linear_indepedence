import React from 'react';
import './App.css';
import Vectors from './vectora';

function App() {
  return (
    <div id="body">
      <h1>Linear Independence</h1>
      <h4>What is linear independence?</h4>
      <p>Linear independence is an import concept in mathematics, in particular it is very important in the study of Linear Algebra.
        Let us take a look at the two dimensional case. If two vectors are linearly independent, they can be used to generate the entire plane.
        In our first example, consider the vectors:
        
        <div class= "xyexample"> 
            <p className="matrixtext"><strong>X</strong> = </p>
            <table class="matrix">
              <tr>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
              </tr>
            </table>
           <p className="matrixtext">and <strong>Y</strong> = </p>
        <table class="matrix">
          <tr>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
          </tr>
        </table></div>
      </p>
      <br />
      <Vectors />
      <br />
      <p>There are a few tests for linear independence we can do pretty easily.
        Can you use <strong>X</strong> to make <strong>Y</strong>? Is there any vector that you cannot generate using some linear
        combination of <strong>X</strong> and <strong>Y</strong>? If the answer to both of these is no, then these two vectors are
        linearly independent.
      </p>
    </div>
  );
}

export default App;
