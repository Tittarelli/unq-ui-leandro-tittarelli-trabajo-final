
export class UnoccupiedCell {
    constructor(aRowIndex, aColumnIndex) {
        this.rowIndex = aRowIndex
        this.columnIndex = aColumnIndex
    }

    updateWith = (aRowIndex, aColumnIndex) => {
        return new UnoccupiedCell(aRowIndex, aColumnIndex);
    }

    transformBoardBecauseOfClick = (aBoard) => {
        aBoard[this.rowIndex][this.columnIndex] = new OccupiedCell(this.rowIndex, this.columnIndex);
    }

    description = () => {
        return 'unoccupied-cell'
    }

    isOccupied = () => {
        return false
    }

    canBePlacedOn = (aShip, aBoard) => {
        return aShip.canBePlacedStartingAtOn(this, aBoard)
    }

    assertAreValidCellsToPlace = (aCellsList, aShip) => {
        return aCellsList.length >= aShip.size && !aCellsList.every((cell) => { cell.isOccupied() })
    }

    canPlaceToLeftOn = (aShip, aBoard) => {
        const cellsToLeft = aBoard[this.rowIndex].slice(0, this.columnIndex + 1)
        return this.assertAreValidCellsToPlace(cellsToLeft, aShip) && aShip.setCells(cellsToLeft)
    }

    canPlaceToBottomOn = (aShip, aBoard) => {
        const boardSize = aBoard.length;
        const cellsToBottom = []
        for (let aRowIndex = this.rowIndex; aRowIndex < boardSize; aRowIndex++) {
            cellsToBottom.push(aBoard[aRowIndex][this.columnIndex])
        }
        return this.assertAreValidCellsToPlace(cellsToBottom, aShip) && aShip.setCells(cellsToBottom)
    };

    placeAndUpdate = (aShip, aBoard) => {
        if (this.canBePlacedOn(aShip, aBoard)) {
            aShip.cells.forEach((cell) => {
                debugger;
                aBoard[cell.rowIndex][cell.columnIndex] = new OccupiedCell(cell.rowIndex, cell.columnIndex, aShip);
            });
        } else {
            alert(`No se puede colocar el/la ${aShip.description} partiendo de la celda seleccionada.`)
        }
    }
}

export class OccupiedCell {
    constructor(aRowIndex, aColumnIndex, aShip) {
        this.rowIndex = aRowIndex
        this.columnIndex = aColumnIndex
        this.ship = aShip
    }
    description = () => {
        return 'occupied-cell'
    }

    transformBoardBecauseOfClick = (aBoard) => {
    }

    isOccupied = () => {
        return true
    }

    updateWith = (aRowIndex, aColumnIndex) => { return this }
}