import { useState } from "react";

export const ShipSelector = ({ ships, onPlaceShip, onReady }) => {
    const [selectedShip, setSelectedShip] = useState(ships[0].description);
    const [selectedOrientation, setSelectedOrientation] = useState('horizontal');

    const handleShipChange = (event) => {
        setSelectedShip(event.target.value);
    };

    const handleOrientationChange = (event) => {
        setSelectedOrientation(event.target.value);
    };

    const handlePlaceShip = () => {
        const ship = ships.find((ship) => ship.description === selectedShip)
        onPlaceShip(ship, selectedOrientation);
    };

    return (
        <div className="ship-selector">
            <label htmlFor="ship-select">Select a ship:</label>
            <select id="ship-select" onChange={handleShipChange} value={selectedShip}>
                {ships.map((ship) => (
                    <option key={ship.description} value={ship.description}>
                        {ship.longDescription()}
                    </option>
                ))}
            </select>
            <label htmlFor="orientation-select">Select orientation:</label>
            <select id="orientation-select" onChange={handleOrientationChange} value={selectedOrientation}>
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
            </select>
            <button className="place-ship" onClick={handlePlaceShip}>
                Place Ship
            </button>
            <button className="ready-button" onClick={onReady}>
                Ready
            </button>
        </div>
    );
};