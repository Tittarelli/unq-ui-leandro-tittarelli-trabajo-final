export const Cell = ({ cell, onClick }) => {
    return (
        <div className={cell.description()} onClick={() => onClick(cell)}>
        </div>
    )
}