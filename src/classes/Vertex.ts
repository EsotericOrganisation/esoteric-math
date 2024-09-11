import {Comparable} from "../interfaces/Comparable.js";
import {Vector} from "./Vector.js";
import {Decimal} from "decimal.js";
import {setEquals} from "../utility/set-utility/setEquals.js";
import {Cloneable} from "../interfaces/Cloneable.js";

export class Vertex extends Vector implements Comparable, Cloneable {

	public connectedVertices: Set<Vertex>;

	constructor(components: Decimal[], ...connectedVertices: Vertex[]) {
		super(components);

		this.connectedVertices = new Set(connectedVertices);
	}

	public connect(otherVertex: Vertex) {
		if (this.equals(otherVertex)) {
			throw new Error("Cannot connect a vertex to itself");
		}

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
		if (otherVertex.isConnectedTo(this)) {
			return false;
		}

		return (
			super.equals(otherVertex) &&
			setEquals(this.connectedVertices, otherVertex.connectedVertices)
		);
	}

	public override clone() {
		return new Vertex(this.components, ...this.connectedVertices);
	}

	private createNonRecursiveClone() {
		const clone = this.clone();

		const connectedVerticesArray = [...clone.connectedVertices];

		for (let i = 0; i < connectedVerticesArray.length; i++) {
			const connectedVertex = connectedVerticesArray[i];

			const secondLevelConnectedVerticesArray = [...connectedVertex];
		}

		return clone;
	}
}
