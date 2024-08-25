import {equals} from "../equals.js";
import {Comparable} from "../../interfaces/Comparable.js";

export function setIncludesElement(set: Set<Comparable>, searchElement: Comparable) {
    for (const element of set) {
        if (equals(element, searchElement)) {
            return true;
        }
    }

    return false;
}
