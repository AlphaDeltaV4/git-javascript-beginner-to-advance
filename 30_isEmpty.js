function isEmpty(obj) {
    if(Object.keys(obj).length === 0){
        return true;
    } else {
        return false;
    }
}
const emptyObject = {};
console.log(isEmpty(emptyObject));  
const object = { name: "John", age: 25 };
console.log(isEmpty(object));  
