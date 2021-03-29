import { h } from 'preact';
const DEFAULT_WHITE = "white";

const cellClick = (setClickId) => (event)  => {
    setClickId(event.target.id);
}
const Cell = ({id, cellColour = DEFAULT_WHITE , textColour = DEFAULT_WHITE, degree, visible, setClickId }) => {
    const isDefaultColor = cellColour === DEFAULT_WHITE;
    return (
        <div id={id} className="cell" style={`background-color:${cellColour}`} onClick={cellClick(setClickId)}>
            {visible && degree !==0 && !isDefaultColor && <div className="cell-degree" style={`color: ${textColour}`} > {degree} </div>}
        </div>
    )
};

export default Cell;
