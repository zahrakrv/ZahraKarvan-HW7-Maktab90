// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// Error: keys.push is not a function
// keys.push("more");

//چون map.keys()
//آرایه به دست نمی دهد.
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);
