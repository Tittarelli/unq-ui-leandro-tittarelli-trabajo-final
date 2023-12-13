
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

    canBePlaced = (aShip) => {
        false
    }

    placeAndUpdate = (aShip, aBoard, aShipsList) => {
        if (this.canBePlaced(aShip)) {

        } else {
            alert(`No se puede colocar el/la ${aShip.description} partiendo de la celda seleccionada.`)
        }
    }
}

export class OccupiedCell {
    constructor(aRowIndex, aColumnIndex) {
        this.rowIndex = aRowIndex
        this.columnIndex = aColumnIndex
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