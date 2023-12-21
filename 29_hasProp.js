function hasProperty(obj, property) {
    let hasProp = obj.hasOwnProperty(property);
    return hasProp;
}
const obj1 = { name: "D", age: 2 };
console.log(hasProperty(obj1, 'name'));
const obj2 = { name: "D", age: 2 };
console.log(hasProperty(obj2, 'last_name'));