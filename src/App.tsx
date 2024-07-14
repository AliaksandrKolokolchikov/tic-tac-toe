import { useState} from "react";
import {Board} from "./components/Board.tsx";
import {GameInfo} from "./components/GameInfo.tsx";

export type SquareValue = 'X' | '0' | null

export type SquaresProps = {
    squares: SquareValue[];
}



function calculateWinner({ squares }: SquaresProps) : SquareValue {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i]
        if(
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a]
        }
    }
    return null
}

function App() {
    const [square, setSquare] = useState<SquareValue[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState<boolean >(true);

    const handleClick = (index:number)  => {
    const newSquare = square.slice();

    if(calculateWinner({squares:newSquare}) || newSquare[index]){
        return
    }
    newSquare[index] = xIsNext ? 'X' : '0'

        setSquare(newSquare);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner({squares:square});
    let status;
    if(winner){
        status = "Winner " + winner
    } else {
        status = "Next player " + (xIsNext ? 'X' : '0')
    }

    const resetGame = () =>{
        setSquare(Array(9).fill(null));
        setXIsNext(true)
    }
  return (
   <div className='App'>
       <h1>Tic-Tac-Toe</h1>
        <Board squares={square} onClick={handleClick} />
       <GameInfo status={status} onReset={resetGame} />
   </div>
  )
}

export default App
