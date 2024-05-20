import { useState } from 'react';
import './App.css';

function Square({ value, clickHandler }) {
  return (
    <button className='square' onClick={clickHandler}>{value}</button>
  )
}
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  function clickHandler(i) {
    let nextBoard = board.slice();
    if(calculateWinner(board)){
      return;
    }
    if (board[i]) {
      return;
    }
    if (xIsNext) {
      nextBoard[i] = 'X';
      setXIsNext(false);
    }
    else {
      nextBoard[i] = 'O';
      setXIsNext(true);
    }
    setBoard(nextBoard);
  }
  let status;
  if (calculateWinner(board)) {
    status = "Winner is: " + calculateWinner(board);
  }
  else if (xIsNext) {
    status = "Next Move is: X";
  }
  else {
    status = "Next Move is: O";
  }
  return (
    <>
      <div>{status}</div>
      <div className="App">
        <div className='board-row'>
          <Square value={board[0]} clickHandler={() => clickHandler(0)} />
          <Square value={board[1]} clickHandler={() => clickHandler(1)} />
          <Square value={board[2]} clickHandler={() => clickHandler(2)} />
        </div>
        <div className='board-row'>
          <Square value={board[3]} clickHandler={() => clickHandler(3)} />
          <Square value={board[4]} clickHandler={() => clickHandler(4)} />
          <Square value={board[5]} clickHandler={() => clickHandler(5)} />
        </div>
        <div className='board-row'>
          <Square value={board[6]} clickHandler={() => clickHandler(6)} />
          <Square value={board[7]} clickHandler={() => clickHandler(7)} />
          <Square value={board[8]} clickHandler={() => clickHandler(8)} />
        </div>
      </div>
    </>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
