import {arrayIncludesElement} from "./arrayIncludesElement.js";

export function arrayDifference(a: any[], b: any[]) {
    return a.filter((element) => !arrayIncludesElement(b, element));
}
