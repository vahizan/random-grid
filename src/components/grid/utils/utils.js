import {Graph} from "./graph";

export const generateGrid = (size) => {
    let grid = [];
    for(let i =0; i<size; i++){
        grid[i] = [];
        for(let j =0 ; j<size;j++){
            grid[i].push(Math.round(Math.random()));
        }
    }
    return grid;
}

export const average = (nums) => {
    const total = nums.reduce((a,b) => Number(a)+Number(b));
    return total/nums.length;
};

export const generateTextColor = (rgbArray) => {
    const avg = average(rgbArray);
    if(avg >= 150){
        return [0,0,0];
    }
    return [255,255,255];
}

export const addEdges = (graph = new Graph(1), randomGrid = []) => {
    randomGrid.forEach((row, v) => {
        row.forEach((value, w) => {
            if(value === 1) {
                graph.addMatrixEdge(v,w);
            }
        } ) ;
    });
}
