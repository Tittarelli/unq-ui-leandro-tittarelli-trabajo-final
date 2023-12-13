import React from 'react';
import { Cell } from './Cell';

export const Board = ({ board, setBoard, isSettingUp, shipAwaitingToBePlaced, ships, setShips }) => {

    const handleCellClick = (cell) => {
        const newBoard = board.map(row => [...row]);
        if (isSettingUp && shipAwaitingToBePlaced) {
            const newShips = [...ships]
            cell.placeAndUpdate(shipAwaitingToBePlaced, newBoard, newShips)
            setShips(newShips)
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
                            cell={cell.updateWith(rowIndex, columnIndex)}
                            onClick={handleCellClick}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};