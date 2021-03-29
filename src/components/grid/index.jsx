import { h } from 'preact';
import { Graph} from "./utils/graph";
import Cell from "./components/cell";
import {addEdges} from "./utils/utils";
import {useState} from "preact/hooks";

const renderCells = (grid = [], graph, clickId, setClickId, cellColour, textColour) => (
    <div className="grid-container">
        {
            grid.map((row, v) => {
                return(
                    <div className="grid-row">
                        {
                            row.map((value, w) => {
                                if(value === 1) {
                                    let id = `cell-${v}-${w}`;
                                    return (
                                        <Cell
                                            id={id}
                                            visible={id === clickId}
                                            degree={graph.getDegree(v,w)}
                                            textColour={textColour}
                                            setClickId={setClickId}
                                            cellColour={cellColour} />
                                    )
                                }
                                return (<Cell row={v} col={w} degree={0} />)
                            })
                        }
                    </div>
                )
            })
        }
    </div>
)
const Grid = ({size, grid, cellColour, textColour}) => {
    const [clickId, setClickId] = useState("");
    const graph = new Graph(size);
    addEdges(graph, grid);

    return (
        <div id="grid" className="grid-model">
            {renderCells(grid, graph, clickId, setClickId, cellColour, textColour)}
        </div>
    )
};

export default Grid;
