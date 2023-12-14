import React from 'react';
import { Cell } from './Cell';

export const Board = ({ board, setBoard, isSettingUp, shipAwaitingToBePlaced, ships, setShips }) => {

    const handleCellClick = (cell) => {
        const newBoard = board.map(row => row.map(cell => ({ ...cell })));
        if (isSettingUp && shipAwaitingToBePlaced) {
            cell.placeAndUpdate(shipAwaitingToBePlaced, newBoard)
            setShips(ships)
        } else {
            cell.transformBoardBecauseOfClick(newBoard)
        }
        setBoard(newBoard)
    };

    return (
        <div className="board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, columnIndex) => (
                        <Cell
                            key={`${rowIndex}-${columnIndex}`}
                            cell={cell}
                            onClick={handleCellClick}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};