import {HyperRectangle} from "../classes/HyperRectangle.js";
import {Decimal} from "decimal.js";
import {Vertex} from "../classes/Vertex.js";
import {setIncludesElement} from "../utility/set-utility/setIncludesElement.js";

describe("HyperRectangle Vertex generation", () => {
    it("Generates vertices at the correct locations", () => {
        const hyperRectangle = new HyperRectangle([new Decimal(2), new Decimal(3)]);

        const vertices = hyperRectangle.vertices;

        const expectedTopRightVertex = new Vertex([new Decimal(2), new Decimal(3)]);
        const expectedTopLeftVertex = new Vertex([new Decimal(0), new Decimal(3)]);
        const expectedBottomLeftVertex = new Vertex([new Decimal(0), new Decimal(0)]);
        const expectedBottomRightVertex = new Vertex([new Decimal(2), new Decimal(0)]);

        expectedTopRightVertex.connect(expectedTopLeftVertex);
        expectedTopLeftVertex.connect(expectedBottomRightVertex);

        expectedBottomLeftVertex.connect(expectedTopLeftVertex);
        expectedBottomLeftVertex.connect(expectedBottomRightVertex);

        const includesTopRightVertex = setIncludesElement(vertices, expectedTopRightVertex);
        const includesBottomRightVertex = setIncludesElement(vertices, expectedBottomRightVertex);
        const includesBottomLeftVertex = setIncludesElement(vertices, expectedBottomLeftVertex);
        const includesTopLeftVertex = setIncludesElement(vertices, expectedTopLeftVertex);

        expect(includesTopRightVertex).toBe(true);
        expect(includesBottomLeftVertex).toBe(true);
        expect(includesBottomRightVertex).toBe(true);
        expect(includesTopLeftVertex).toBe(true);
    });
})