import '../Style/Game.css';
import { useState } from "react";
import { CalculateWinner } from "./CalculateWinner";
import { Board } from "./Board";

const INITIAL_STATE = {
    cells: Array(9).fill(null),
    xIsNext: true
};

let moveCounter = 0;

export const Game = () => {
    const [gameState,setGameState] = useState(INITIAL_STATE);

    const handleClick = (i) => {
        const cells = [...gameState.cells];

        if(CalculateWinner(cells) || cells[i]){
            return;
        };

        cells[i] = gameState.xIsNext ? 'X' : 'O';

        setGameState({
            cells: cells,
            xIsNext: !gameState.xIsNext
        });

        moveCounter++;
    };

    const handleRestart = () => {
        setGameState(INITIAL_STATE);
        moveCounter = 0;
    };

    const winner = CalculateWinner(gameState.cells);
    let status = (winner) ? `CONGRATULATIONS ! ${winner} WINS THE GAME` : (moveCounter > 8) ? 'DRAW' : `NEXT PLAYER: ${gameState.xIsNext ? 'X' : 'O'}`;

    return(
        <div className="game">
            <div className="game-board">
                <Board cells={gameState.cells} onClick={(i) => handleClick(i)} />
            </div>
            <div className="game-info">
                <div>{status}</div>     
            </div>
            <div className='reset'>
                <button className='restart-btn' onClick={handleRestart}>RESTART</button>
            </div>
        </div>
    );
}