import {Shape} from "./Shape.js";
import {Vector} from "./Vector.js";
import {Vertex} from "./Vertex.js";
import Decimal from "decimal.js";

export class HyperRectangle extends Shape {
	constructor(sideLengths: Decimal[]) {
		const dimensions = sideLengths.length;
		const vertices: Set<Vertex> = new Set();

		for (let n = 0; n < Math.pow(2, dimensions); n++) {
			const binaryString = n.toString(2).padStart(dimensions, "0");
			const coordinates: Decimal[] = [];

			for (let i = 0; i < dimensions; i++) {
				coordinates.push(binaryString.charAt(i) === "0" ? new Decimal(0) : sideLengths[i]);
			}

			vertices.add(new Vertex(coordinates));
		}

		super(vertices);

		for (const vertex of this.vertices) {
			for (let i = 0; i < vertex.components.length; i++) {
				const newVectorComponents = [...vertex.components];

				const componentToChange = newVectorComponents[i];

				const changeValue = componentToChange.equals(0) ? sideLengths[i] : new Decimal(0);

				newVectorComponents[i] = changeValue;

				const newVector = new Vector(newVectorComponents);

				const vertexToConnectTo = this.getVertex(newVector);

				vertexToConnectTo.connect(vertex);
			}
		}
	}

	public get sideLengths() {
		const sideLengths = new Array(this.dimension);

		console.log(this.dimension);

		for (const vertex of this.vertices) {
			for (let i = 0; i < vertex.components.length; i++) {
				const component = vertex.components[i];

				console.log(component);

				if (!component.equals(0)) {
					sideLengths[i] = component;
				}
			}
		}

		return sideLengths;
	}
}
