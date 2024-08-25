import {HyperCube} from "./HyperCube.js";
import Decimal from "decimal.js";

export class Square extends HyperCube {
	constructor(sideLength: Decimal) {
		super(sideLength, new Decimal(2));
	}
}
