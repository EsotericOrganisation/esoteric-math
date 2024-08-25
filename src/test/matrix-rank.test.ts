import {Matrix} from "../classes/Matrix.js";
import {Vector} from "../classes/Vector.js";
import {Decimal} from "decimal.js";

describe("Matrix rank getter", () => {
    it("Returns the correct value", () => {
        const matrix = new Matrix([new Vector([new Decimal(4), new Decimal(2)]), new Vector([new Decimal(3), new Decimal(1)])]);
        const rank = matrix.rank;

        expect(rank).toBe(2);
    });
})
