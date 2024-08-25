import {arrayEquals} from "../array-utility/arrayEquals.js";

export function setEquals(a: Set<any>, b: Set<any>) {
    if (a.size !== b.size) {
        return false;
    }

    const aArray = [...a];
    const bArray = [...b];

    return arrayEquals(aArray, bArray);
}
