import {Vector} from "./Vector.js";
import {Vertex} from "./Vertex.js";
import {arrayEquals} from "../utility/array-utility/arrayEquals.js";

export class Shape {

	public vertices: Set<Vertex>;

	constructor(vertices: Set<Vertex> = new Set()) {
		this.vertices = vertices;
	}

	public get dimension(): number {
		return this.vertices.values().next().value.dimension;
	}

	public getVertex(position: Vector) {
		const components = position.components;

		for (const vertex of this.vertices) {
			if (arrayEquals(components, vertex.components)) {
				return vertex;
			}
		}

		return null;
	}

	public translate(translation: Vector) {
		for (const vertex of this.vertices) {
			vertex.add(translation);
		}
	}
}
