import { useState } from 'react';
import './playerSection.css';
import { Board } from './board';
import { UnoccupiedCell } from '../cells';
import { ShipSelector } from './shipSelector';
import { ShipOrientation, Ship } from '../ships';

export const PlayerSection = ({ player }) => {
    const createBoard = () => {
        const boardSize = 10
        const matrix = [];
        for (let i = 0; i < boardSize; i++) {
            const row = [];
            for (let j = 0; j < boardSize; j++) {
                row.push(new UnoccupiedCell(i, j));
            }
            matrix.push(row);
        }
        return matrix;
    }
    const initialBoard = createBoard()
    const [isSettingUp, setIsSettingUp] = useState(true);
    const [shipAwaitingToBePlaced, setShipAwaitingToBePlaced] = useState(null);
    const [board, setBoard] = useState(initialBoard);
    const [ships, setShips] = useState([
        new Ship('Portaaviones', 5),
        new Ship('Crucero', 4),
        new Ship('Submarino', 3),
        new Ship('Lancha', 2)
    ])

    const handlePlaceShip = (ship, orientationDescription) => {
        ship.setOrientation(ShipOrientation.of(orientationDescription))
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