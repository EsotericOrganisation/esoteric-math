import {Comparable} from "../interfaces/Comparable.js";
import {setEquals} from "../utility/set-utility.js";
import {Vector} from "./Vector.js";
import Decimal from "decimal.js";

export class Vertex extends Vector implements Comparable, Iterable<Decimal> {
	public connectedVertices: Set<Vertex>;

	constructor(components: Decimal[], ...connectedVertices: Vertex[]) {
		super(components);

		this.connectedVertices = new Set(connectedVertices);
	}

	public connect(otherVertex: Vertex) {
		this.connectedVertices.add(otherVertex);
		otherVertex.connectedVertices.add(this);
	}

	public isConnectedTo(otherVertex: Vertex) {
		for (const connectedVertex of otherVertex.connectedVertices) {
			const equal = connectedVertex === this;

			if (equal) {
				return true;
			}
		}

		return false;
	}

	public equals(otherVertex: Vertex) {
		return (
			super.equals(otherVertex) &&
			setEquals(this.connectedVertices, otherVertex.connectedVertices)
		);
	}

	[Symbol.iterator](): Iterator<Decimal> {
		let index = 0;
		const components = this.components;

		return {
			next(): IteratorResult<Decimal> {
				if (index < components.length) {
					return {
						value: components[index++],
						done: false
					};
				} else {
					return {value: undefined, done: true};
				}
			}
		};
	}
}
