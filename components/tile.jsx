import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        const flagged = event.altKey ? true : false;
        this.props.updateGame(this.props.tile, flagged);
    }
    render() { 
        const tile = this.props.tile;
        let text = '';
        let count = 0;
        let klass = '';
        if (tile.explored) {
            if (tile.bombed) {
                klass = 'tile bombed';
                text = '\u2622';
            } else {
                count = tile.adjacentBombCount();
                klass = 'tile explored';
                text = `${count}`
            }
        } else if (tile.flagged) {
            klass = 'tile flagged';
            text = '\u2691';
        } else {
            klass = 'tile'
        }
        return (
            <div className={klass} onClick={this.handleClick}>{text}</div>
        );
    }
}
 
export default Tile;