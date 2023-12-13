class ShipBehavior {
    constructor(description, size) {
        this.description = description
        this.size = size
    }

    longDescription = () => {
        return `${this.description} (${this.size} casillas)`
    }

    setOrientation = (aString) => {
        "aString should be either horizontal or vertical -ltittarelli"
        this.orientation = aString
    }

}

export class UnallocatedShip extends ShipBehavior {

    isAlreadyAllocated = () => {
        return false
    }
}
export class Ship extends ShipBehavior {
    constructor(description, size, cells) {
        super(description, size)
        this.cells = cells
    }

    isAlreadyAllocated = () => {
        return true
    }
}