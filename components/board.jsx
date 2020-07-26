import React from 'react';
import Tile from './tile';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const board = this.props.board;
        return ( 
            <div className="board">
                {board.grid.map((row, i) => {
                    return (
                    <div className='row' key={i}>
                        {row.map((tile, j) => {
                            return (<Tile 
                            key={i * this.props.board.gridSize + j} tile={tile} updateGame={this.props.updateGame}
                            />);
                        })}
                    </div>);
                })}
            </div>
         );
    }
}
 
export default Board;