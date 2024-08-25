import {arrayEquals} from "./array-utility/arrayEquals.js";
import {objectEquals} from "./object-utility/objectEquals.js";
import {setEquals} from "./set-utility/setEquals.js";
import {Comparable} from "../interfaces/Comparable.js";

type ComparableValue = Comparable | Comparable[] | Set<Comparable>;

export function equals(a: ComparableValue, b: ComparableValue) {
    if (Array.isArray(a) && Array.isArray(b)) {
        return arrayEquals(a, b);
    }

    if (a instanceof Object && b instanceof Object) {
        if ("equals" in a) {
            return a.equals(b);
        }

        return objectEquals(a, b);
    }

    if (a instanceof Set && b instanceof Set) {
        return setEquals(a, b);
    }

    return a === b;
}
