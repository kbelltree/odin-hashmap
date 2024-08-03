const { HashMap, HashSet } = require("./hashMap");

// Create a new instance of your hash map and set the load factor to be 0.75.
const test = new HashMap();

// Populate your hash map using the set(key, value) method by copying the given combos:
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.dir(test, { depth: null });

//  Try overwriting a few nodes using set(key, value). This should only over-write the existing values of your nodes and not add new ones.
test.set("kite", "yellow");
test.set("lion", "brown");

console.dir(test, { depth: null });

// Populate your hash map with the last node (doing this will make your hash map exceed your current load factor, hence expanding your buckets and growing your hash map).
test.set("moon", "silver");

console.dir(test, { depth: null });
console.log("length():", test.length());

// With your new hash map, try overwriting a few nodes using set(key, value). This should only over-write existing values of your nodes.

test.set("moon", "gray");
test.set("jacket", "navy");
test.set("to-remove", "no-color");

console.dir(test, { depth: null });
console.log("length():", test.length());

// Test the other methods of your hash maps such as get(key), has(key), remove(key), length(), clear(), keys(), values(), and entries().
console.log("get():", test.get("moon"));
console.log("get():", test.get("tomato"));
console.log("get():", test.get("ice cream"));
console.log("has():", test.has("moon"));
console.log("has():", test.has("tomato"));
console.log("has():", test.has("ice cream"));
console.log("remove():", test.remove("to-remove"));
console.log("remove():", test.remove("tomato"));
console.log("has():", test.has("to-remove"));

console.dir(test, { depth: null });

test.set("skirt", "black");
test.set("lime", "green");

// test.set('', '');
// test.set(123, 'number');

console.dir(test, { depth: null });
console.log("length():", test.length());

console.log("keys():", test.keys());
console.log("values():", test.values());
console.log("entries():", test.entries());

test.clear();
console.log("clear():", test);
console.log("keys():", test.keys());
console.log("entries():", test.entries());

// HashSet tests

const test2 = new HashSet();

test2.set("apple");
test2.set("banana");
test2.set("carrot");
test2.set("dog");
test2.set("elephant");
test2.set("frog");
test2.set("grape");
test2.set("hat");
test2.set("ice cream");
test2.set("jacket");
test2.set("kite");
test2.set("lion");

console.dir(test2, { depth: null });

test2.set("kite");
test2.set("lion");

console.dir(test2, { depth: null });

test2.set("moon");

console.dir(test2, { depth: null });
console.log("length():", test2.length());

test2.set("moon");
test2.set("jacket");
test2.set("to-remove");

console.dir(test2, { depth: null });
console.log("length():", test2.length());

console.log("get():", test2.get("moon"));
console.log("get():", test2.get("tomato"));
console.log("get():", test2.get("ice cream"));
console.log("has():", test2.has("moon"));
console.log("has():", test2.has("tomato"));
console.log("has():", test2.has("ice cream"));
console.log("remove():", test2.remove("to-remove"));
console.log("remove():", test2.remove("tomato"));
console.log("has():", test2.has("to-remove"));

console.dir(test2, { depth: null });

test2.set("skirt");
test2.set("lime");

// test2.set('');
// test2.set(123, 'number');

console.dir(test2, { depth: null });

console.log("keys():", test2.keys());

test2.clear();
console.log("clear():", test2);
console.log("keys():", test2.keys());
