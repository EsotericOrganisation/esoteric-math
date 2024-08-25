import {setIncludesElement} from "./setIncludesElement.js";

export function setDifference(a: Set<any>, b: Set<any>) {
    return new Set(Array.from(a).filter((element) => !setIncludesElement(b, element)));
}
