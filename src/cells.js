export class IncompleteUnoccupiedCell {
    description = () => {
        return 'unoccupied-cell'
    }

    isOccupied = () => {
        return false
    }
}

export class UnoccupiedCell {
    constructor(aRowIndex, aColumnIndex) {
        this.rowIndex = aRowIndex
        this.columnIndex = aColumnIndex
    }

    description = () => {
        return 'unoccupied-cell'
    }

    isOccupied = () => {
        return false
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


    isOccupied = () => {
        return true
    }
}