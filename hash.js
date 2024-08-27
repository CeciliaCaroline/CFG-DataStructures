/*
HASH TABLE IMPLEMENTATION

Implementation of a Hash Table (without the actual storage mechanism)
- takes a pseudo hash table size parameter
- implements a hash calculator i.e. a method of calculating the hash table index
*/

class HashTable {
    constructor(size) {
        // Normally you'd make a method of storing the values like:
        // this.data = new Array(size);
        // but we want to just generate the hash
        this.size = size
    }

    calculateHash(value) {
        let hash = 0;
        value = value.toString()
        if (typeof value === 'string' || value instanceof String) {
            // sum character codes in the string
            // charCodeAt - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
            for (let i = 0; i < value.length; i++) {
                hash = (hash + value.charCodeAt(i) * i) % this.size;
            }
        } else {
            // division method
            // https://github.com/python/cpython/blob/96bf24380e44dfa1516d65480250995e737c0cb9/Objects/longobject.c#L4000
            hash = value % this.size;
        }
        return hash;
    }
}

// Common hash table sizes are 24 and 64 bit
const ht = new HashTable(16777215); // 24 bit
// const ht = new HashTable(9223372036854775807); // 64 bit

// hash for integer
console.log('Hash for 100 is:', ht.calculateHash(100))
// // hash for decimal
console.log('Hash for 100.55 is:', ht.calculateHash(100.55))
// // hash for string
console.log('Hash for CFG is:', ht.calculateHash('CFG'))
// // hash for array
word = ['g', 'i', 'r', 'l', 's']
console.log('The hash is:', ht.calculateHash(word))
