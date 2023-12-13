import React from 'react';
import { Cell } from './Cell';
import { UnoccupiedCell } from '../cells';

export const Board = ({ board }) => {
    const handleCellClick = (rowIndex, columnIndex) => {
        console.log(`Cell clicked at ${rowIndex}-${columnIndex}`);
    };

    return (
        <div className="board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, columnIndex) => (
                        <Cell
                            key={`${rowIndex}-${columnIndex}`}
                            cell={new UnoccupiedCell(rowIndex, columnIndex)}
                            onClick={() => handleCellClick(rowIndex, columnIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};