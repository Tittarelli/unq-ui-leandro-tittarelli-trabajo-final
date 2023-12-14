export class Ship {
    constructor(description, size) {
        this.description = description
        this.size = size
        this.cells = []
    }

    longDescription = () => {
        return `${this.description} (${this.size} casillas)`
    }

    setOrientation = (aShipOrientation) => {
        this.orientation = aShipOrientation
    }

    canBePlacedStartingAtOn = (aCell, aBoard) => {
        return this.orientation.isValidStartingPointOn(aCell, aBoard, this)
    }

    setCells = (aCellsList) => {
        this.cells = aCellsList.slice(aCellsList.length - this.size, aCellsList.length);
        return true;
    }

    isAlreadyAllocated = () => {
        return this.cells.length > 0;
    }

}

export class ShipOrientation {
    constructor(description) {
        this.description = description
    }

    static of(description) {
        if (description === 'horizontal') {
            return new HorizontalShipOrientation();
        } else {
            return new VerticalShipOrientation();
        }
    }
}

class HorizontalShipOrientation extends ShipOrientation {
    isValidStartingPointOn = (aCell, aBoard, aShip) => {
        return aCell.canPlaceToLeftOn(aShip, aBoard)
    }
}

class VerticalShipOrientation extends ShipOrientation {
    isValidStartingPointOn = (aCell, aBoard, aShip) => {
        return aCell.canPlaceToBottomOn(aShip, aBoard)
    }
}