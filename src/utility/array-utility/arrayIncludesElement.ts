import {equals} from "../equals.js";

export function includes<T>(array: T[], searchElement: T) {
    for (const element of array) {
        if (equals(searchElement, element)) {
            return true;
        }
    }

    return false;
}
