import { h } from 'preact';
import {Graph} from "../../../src/components/grid/utils/graph";

describe('Graph', () => {
    let graph;
    beforeEach(()=> {
        graph = new Graph(5);
        graph.addMatrixEdge(0,4);
        graph.addMatrixEdge(1,0);
        graph.addMatrixEdge(1,1);
        graph.addMatrixEdge(2,0);
        graph.addMatrixEdge(2,1);
        graph.addMatrixEdge(2,3);
        graph.addMatrixEdge(2,4);
        graph.addMatrixEdge(4,0);
        graph.addMatrixEdge(4,1);
        graph.addMatrixEdge(4,2);
    });

    test("addMatrixEdges", () => {
        const expected = [[0,0,0,0,1],
                         [1,1,0,0,0],
                         [1,1,0,1,1],
                         [0,0,0,0,0],
                         [1,1,1,0,0]];
        expect(graph.getMatrix()).toStrictEqual(expected);
    });

    describe("getRegion", () => {
        test("should retrieve region of connected cells", () => {
            const expected = [[1,0],[1,1],[2,1],[2,0]];
            expect(graph.getRegion(1,0)).toStrictEqual(expected);
        });

        test("should retrieve correct connected cells for first cell", () => {
            let expected = [[4,0],[4,1],[4,2]];
            expect(graph.getRegion(4,0)).toStrictEqual(expected);
        });
        test("should retrieve correct connected cells for middle cell", () => {
            let expected = [[4,1],[4,0],[4,2]];
            expect(graph.getRegion(4,1)).toStrictEqual(expected);
        });
        test("should retrieve correct connected cells for last cell", () => {
            let expected = [[4,2],[4,1],[4,0]];
            expect(graph.getRegion(4,2)).toStrictEqual(expected);
        });
        test("should not count diagonally connected cells", () => {
            graph = new Graph(4);
            graph.addMatrixEdge(0,0);
            graph.addMatrixEdge(1,1);
            graph.addMatrixEdge(2,2);
            graph.addMatrixEdge(3,3);

            let expected = [[0,0]];
            expect(graph.getRegion(0,0)).toStrictEqual(expected);
        });
        test("should not count diagonally connected cells in a different starting region", () => {
            graph = new Graph(6);
            graph.addMatrixEdge(1,2);
            graph.addMatrixEdge(2,1);
            graph.addMatrixEdge(2,2);
            graph.addMatrixEdge(2,3);
            graph.addMatrixEdge(3,2);
            graph.addMatrixEdge(4,2);
            graph.addMatrixEdge(5,2);
            graph.addMatrixEdge(5,3);

            let expected = [[2,1],[2,2],[1,2],[2,3],[3,2],[4,2],[5,2],[5,3]];
            expect(graph.getRegion(2,1)).toStrictEqual(expected);
        });
    });
});
