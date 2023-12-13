export const Cell = ({ cell, onClick }) => {
    return (
        <div className={cell.description()} onClick={onClick}>
            <p>{cell.rowIndex}-{cell.columnIndex}</p>
        </div>
    )

}