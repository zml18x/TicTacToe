import { Cell } from "./Cell";

export const Board = ({cells,onClick}) => {
    const renderCell = (i) => {
        return <Cell value={cells[i]} onClick={() => onClick(i)} />;
    };

    return (
        <div className="board">
            <div className="board-row">
                {renderCell(0)}
                {renderCell(1)}
                {renderCell(2)}
            </div>
            <div className="board-row">
                {renderCell(3)}
                {renderCell(4)}
                {renderCell(5)}
            </div>
            <div className="board-row">
                {renderCell(6)}
                {renderCell(7)}
                {renderCell(8)}
            </div>
        </div>
    );
};