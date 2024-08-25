import {includes} from "./arrayIncludesElement.js";

export function arrayDifference(a: any[], b: any[]) {
    return a.filter((element) => !includes(b, element));
}
