import {equals} from "../equals.js";

export function setIncludesElement<T>(set: Set<T>, searchElement: T) {
    for (const element of set) {
        if (equals(element, searchElement)) {
            return true;
        }
    }

    return false;
}
