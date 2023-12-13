import { useState } from 'react';
import './playerSection.css';
import { Board } from './board';
import { IncompleteUnoccupiedCell } from '../cells';

export const PlayerSection = ({ player }) => {
    const boardSize = 10
    const initialBoard = Array(boardSize).fill(Array(boardSize).fill(new IncompleteUnoccupiedCell()));
    const [board, setBoard] = useState(initialBoard);

    return (
        <section className='playerSection'>
            <h2>{player}</h2>
            <Board board={board} />
        </section>
    );
};