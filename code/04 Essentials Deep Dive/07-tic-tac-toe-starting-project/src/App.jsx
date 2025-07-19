import { useState } from 'react';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import Log from './components/Log';
import Player from './components/Player';
import { WINNING_COMBINATIONS } from './winning_combinations';

function getNewGameBoard() {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
}

function deriveActivePlayer(gameTurns) {
  let activePlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    activePlayer = 'O';
  }

  return activePlayer;
}

function App() {
  const [ players, setPlayers ] = useState({
    'X': 'Player 1',
    'O': 'Player 2'
  });

  const [ gameTurns, setGameTurns ] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = getNewGameBoard();

  for (const turn of gameTurns) {
      const { square, player } = turn;
      gameBoard[square.row][square.col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination;
    const firstSymbol = gameBoard[first.row][first.column];
    const secondSymbol = gameBoard[second.row][second.column];
    const thirdSymbol = gameBoard[third.row][third.column];

    if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
      winner = firstSymbol;
      break;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

      return updatedTurns;
    })
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => ({
      ...prevPlayers,
      [symbol]: newName
    }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onSave={handlePlayerNameChange} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onSave={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={players[winner]} onRematch={handleRematch} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App
