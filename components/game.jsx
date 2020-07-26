import React from 'react';
import * as Minesweeper from '../minesweeper'
import Board from './board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        const board = new Minesweeper.Board(9, 15);
        this.state = { board };
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }
    render() {
        if (this.state.board.lost()) {
            return (
                <div className="message">
                    <h1>You lost!</h1>
                    <button onClick={this.restartGame}>Play again!</button>
                </div>
            );
        } 
        if (this.state.board.won()) {
            <div className="message">
                <h1>You won!</h1>
                <button onClick={this.restartGame}>Play again!</button>
            </div>
        }
        return ( 
            <div>
                <h1 className='game-title'>Minesweeper</h1>
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
         );
    }
    updateGame(tile, flagged) {
        flagged ? tile.toggleFlag() : tile.explore();
        this.setState({ board: this.state.board });
    }
    restartGame() {
        const board = new Minesweeper.Board(9, 15);
        this.setState({ board });
    }
}
 
export default Game;