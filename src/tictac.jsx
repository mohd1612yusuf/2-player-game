import React, { useState } from 'react';
import './App.css';

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

export default function App() {

  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((cell, idx) => (
          <button 
            key={idx} 
            className="cell" 
            onClick={() => handleClick(idx)}
          >
            {cell}
          </button>
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>Reset</button>
    </div>
  );
}
