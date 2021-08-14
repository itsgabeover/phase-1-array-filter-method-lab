// Code your solution here

function findMatching(anArray, aString) {
    return anArray.filter(name => name.toUpperCase() === aString.toUpperCase());
}

function fuzzyMatch(anArray, aString) {
    return anArray.filter(name => name.startsWith(aString));
}

function matchName(objectArray, aString) {
    return objectArray.filter(object => object.name === aString);
}
