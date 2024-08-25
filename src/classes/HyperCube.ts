import {HyperRectangle} from "./HyperRectangle.js";
import {Decimal} from "decimal.js";

export class HyperCube extends HyperRectangle {
	constructor(sideLength: Decimal, dimensions: Decimal) {
		super(Array(dimensions).fill(sideLength));
	}

	public get sideLength() {
		return this.sideLengths[0];
	}
}
