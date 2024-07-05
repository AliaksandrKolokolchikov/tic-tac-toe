import {Square} from "./Square.tsx";

type BoardProps = {
    squares:number[]
    onClick:(i:number) => void
}

export const Board = ({squares, onClick}:BoardProps) => {
    const renderBoard = (i:number) => {
        return (
            <Square value={squares[i]} onClick={() => onClick(i)}/>
        )
    }
    return (
        <div className='board'>
            <div className='board-row'>
                {renderBoard(0)}
                {renderBoard(1)}
                {renderBoard(2)}
            </div>
            <div className='board-row'>
                {renderBoard(3)}
                {renderBoard(4)}
                {renderBoard(5)}
            </div>
            <div className='board-row'>
                {renderBoard(6)}
                {renderBoard(7)}
                {renderBoard(8)}
            </div>
        </div>
    );
};
