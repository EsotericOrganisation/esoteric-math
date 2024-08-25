export interface Comparable {
	equals(otherObject: typeof this): boolean;
}
