import {equals} from "../equals.js";

export function arrayEquals(a: any[], b: any[]) {
    if (a.length !== b.length) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        const aValue = a[i];
        const bValue = b[i];

        const equal = equals(aValue, bValue);

        if (!equal) {
            return false;
        }
    }

    return true;
}
