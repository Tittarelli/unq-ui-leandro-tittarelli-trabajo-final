import { useState } from 'react';
import './playerSection.css';
import { Board } from './board';
import { UnoccupiedCell } from '../cells';
import { ShipSelector } from './shipSelector';
import { UnallocatedShip } from '../ships';

export const PlayerSection = ({ player }) => {
    const boardSize = 10
    const initialBoard = Array(boardSize).fill(Array(boardSize).fill(new UnoccupiedCell()));
    const [isSettingUp, setIsSettingUp] = useState(true);
    const [shipAwaitingToBePlaced, setShipAwaitingToBePlaced] = useState(null);
    const [board, setBoard] = useState(initialBoard);
    const [ships, setShips] = useState([
        new UnallocatedShip('Portaaviones', 5),
        new UnallocatedShip('Crucero', 4),
        new UnallocatedShip('Submarino', 3),
        new UnallocatedShip('Lancha', 2)
    ])

    const handlePlaceShip = (ship, selectedOrientation) => {
        ship.setOrientation(selectedOrientation)
        setShipAwaitingToBePlaced(ship)
    };

    const handleReady = () => {
        setIsSettingUp(false)
    };

    return (
        <section className='playerSection'>
            <h2>{player}</h2>
            <ShipSelector
                ships={ships}
                onPlaceShip={handlePlaceShip}
                onReady={handleReady}
            />
            <Board
                board={board}
                setBoard={setBoard}
                isSettingUp={isSettingUp}
                shipAwaitingToBePlaced={shipAwaitingToBePlaced}
                ships={ships}
                setShips={setShips} />
        </section>
    );
};