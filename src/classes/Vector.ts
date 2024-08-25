import {Comparable} from "../interfaces/Comparable.js";
import {Decimal} from "decimal.js";
import {arrayEquals} from "../utility/array-utility/arrayEquals.js";
import {Cloneable} from "../interfaces/Cloneable.js";

export class Vector implements Comparable, Cloneable, Iterable<Decimal> {

	public components: Decimal[];

	constructor(components: Decimal[]) {
		this.components = components;
	}

	public get dimension() {
		return this.components.length;
	}

	public equals(otherVector: Vector) {
		if (this === otherVector) {
			return true;
		}

		return arrayEquals(this.components, otherVector.components);
	}

	public clone() {
		return new Vector(this.components);
	}

	public add(otherVector: Vector) {
		if (otherVector.dimension !== this.dimension) {
			throw new Error(
				"Can't add vector " +
					this +
					" to vector " +
					otherVector +
					" because of differing dimensions."
			);
		}

		for (let i = 0; i < this.components.length; i++) {
			this.components[i].add(otherVector.components[i]);
		}
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
