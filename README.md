# odin-hashmap

## Project: HashMap

This project involves the implementation of hash maps in JavaScript, using either class or factory functions. For more comprehensive details on this project, please refer to [The Odin Project - Project: HashMap](https://www.theodinproject.com/lessons/javascript-hashmap).

## Key Project Instructions:

Start by defining a `HashMap` class or factory function. Utilize the following error alert to manage attempts to access an index out of bounds:

```javascript
if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
}
```

### Methods to Implement

- `hash(key)`:  
  Develop a hash code generator. You are free to use the following provided code:

```javascript
function hash(key) {
  let hashCode = 0;
  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }
  return hashCode;
}
```

- `set(key, value)`:  
  Implement with the following key considerations:

  1. Override the current value with the new value if the key is already present.
  2. Create a strategy to manage collisions.
  3. Expand the bucket size when it reaches the pre-set load factor.

- `get(key)`:  
  Return the value associated with the key, or `null` if not found.

- `has(key)`:  
  Return a boolean indicating whether a value is associated with the key.

- `remove(key)`:  
  Remove the entry containing the key and return `true` or return `false` if the key is not found.

- `length()`:  
  Return the total number of keys in the hash map.

- `clear()`:  
  Clear all entries in the hash map.

- `keys()`:  
  Return an array containing all the keys in the hash map.

- `values()`:  
  Return an array containing all the values in the hash map.

- `entries()`:  
  Return an array of all key-value pairs in the format: `[[firstKey, firstValue], [secondKey, secondValue]]`.

#### Extra Credit

As an additional challenge, you may also implement a `HashSet` that only stores keys.

### Testing the Hash Map

Create a separate file for tests. Begin by instantiating a new `HashMap` and follow the testing instructions directly written as comments in `test.js`.

**[Link to my final solution](./hashMap.js)**

## Built With

- JavaScript
- ESLint
- Prettier

---
