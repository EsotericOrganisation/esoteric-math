import {Vertex} from "../classes/Vertex.js";
import {Decimal} from "decimal.js";

describe("Vertex Equality Check", () => {
    it("Verifies vertex equality correctly", () => {
        const a = new Vertex([new Decimal(3), new Decimal(4)]);
        const b = new Vertex([new Decimal(0), new Decimal(0)]);

        a.connect(b);

        const v = new Vertex([new Decimal(3), new Decimal(4)]);
        const u = new Vertex([new Decimal(0), new Decimal(0)]);

        v.connect(u);

        const areAAndVEqual = a.equals(v);
        const areBAndUEqual = b.equals(u);

        expect(areAAndVEqual).toBe(true);
        expect(areBAndUEqual).toBe(false);
    })
})
