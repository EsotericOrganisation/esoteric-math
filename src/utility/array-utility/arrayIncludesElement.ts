import {equals} from "../equals.js";
import {Comparable} from "../../interfaces/Comparable.js";

export function arrayIncludesElement(array: Comparable[], searchElement: Comparable) {
    for (const element of array) {
        if (equals(searchElement, element)) {
            return true;
        }
    }

    return false;
}
