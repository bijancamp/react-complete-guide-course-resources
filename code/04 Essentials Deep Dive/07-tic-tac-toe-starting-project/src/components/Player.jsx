import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onSave }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
        setIsEditing(true);
    }

    function handleSave() {
        setIsEditing(false);
        onSave(symbol, playerName);
    }

    function handleChange(e){
        setPlayerName(e.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {!isEditing && <span className="player-name">{playerName}</span>}
                {isEditing && <input type="text" value={playerName} className='player' onChange={handleChange} required />}
                <span className="player-symbol">{symbol}</span>
            </span>
            {!isEditing && <button onClick={handleEdit}>Edit</button>}
            {isEditing && <button onClick={handleSave}>Save</button>}
        </li>
    );
}