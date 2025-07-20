import { useRef, useState } from 'react';

export default function Player() {
  const playerNameTextBox = useRef();
  const [ playerName, setPlayerName ] = useState();

  const onSetName = () => {
    const enteredName = playerNameTextBox.current.value;

    if (!enteredName) {
      return;
    }

    setPlayerName(playerNameTextBox.current.value);
    playerNameTextBox.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {playerName || 'unknown entity'}</h2>
      <p>
        <input ref={playerNameTextBox} type="text" />
        <button onClick={onSetName}>Set Name</button>
      </p>
    </section>
  );
}
