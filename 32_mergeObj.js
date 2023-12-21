function mergeObjects(obj1, obj2) {
    const mergedObject = { ...obj1, ...obj2 };
    return mergedObject;
}
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
console.log(mergeObjects(object1, object2))