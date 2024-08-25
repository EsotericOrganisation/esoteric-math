import {arrayEquals} from "./array-utility/arrayEquals.js";
import {objectEquals} from "./object-utility/objectEquals.js";
import {setEquals} from "./set-utility/setEquals.js";

export function equals(a: any, b: any) {
    if (Array.isArray(a) && Array.isArray(b)) {
        return arrayEquals(a, b);
    }

    if (a instanceof Object && b instanceof Object) {
        if ((a as Object).hasOwnProperty("equals")) {
            return a.equals(b);
        }

        return objectEquals(a, b);
    }

    if (a instanceof Set && b instanceof Set) {
        return setEquals(a, b);
    }

    return a === b;
}
