let matrix = [];
export class Graph {
    constructor(vertices) {
        matrix = [];
        for(let i =0;i<vertices;i++){
            matrix[i] = [];
            for(let j = 0;j< vertices;j++){
                matrix[i][j] = 0;
            }
        }
    }

    addMatrixEdge(row,column) {
        matrix[row][column] = 1;
    }
    getDegree(row,column){
        return this.getRegion(row,column).length;
    }
    clearMatrix() {
        matrix = [];
    }
    getMatrix(){
        return matrix;
    }

    getRegion(row,column){
        let copiedMatrix = [...matrix];
        let region = [];
        return this.getRegionHelper(region, copiedMatrix,row,column);
    }
    isDiagonal(startRegion = [], currentRegion = []) {
        return (Math.abs(startRegion[0] - currentRegion[0]) === 1 && Math.abs(startRegion[1] - currentRegion[1]) === 1);
    }

    getRegionHelper(region, adjMatrix, row, column) {
        if(row < 0 || column < 0 || row >= adjMatrix.length ||
            column >= adjMatrix.length || column >= adjMatrix[row].length
        ){
            return region;
        }
        if(adjMatrix[row][column] === 0) {
            return region;
        }
        adjMatrix[row][column] = 0;
        region.push([row,column]);
        for(let r= row-1; r<=row+1; r++){
            for(let c = column-1; c<= column+1; c++){
                if((r !== row || c !== column) && (!this.isDiagonal([row,column],[r,c]))){
                    this.getRegionHelper(region, adjMatrix, r, c);
                }
            }
        }
        return region;
    }
}
