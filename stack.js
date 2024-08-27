// // STACK


// class StackList {
//     /*
//     Stack Implementation using a List
//     */

//     constructor(size) {
//         this.container = Array(size)
//         this.capacity = size
//         this.top = -1 // top reps the index of stack elements
//     }

//     push(x) {
//         /*
//         Method to add an element `x` to the stack 
//         */
//         if (this.is_full()) {
//             console.log("Stack is full! Calling exit()…")
//             throw "stop execution"
//         }
//         console.log("Inserting", x, "into the stack…")
//         this.top = this.top + 1
//         this.container[this.top] = x
//     }

//     pop() {
//         /*
//         Method to pop a top element from the stack
//         */
//         if (this.is_empty()) {
//             console.log("Stack is empty! Calling exit()…")
//             throw "stop execution"
//         }

//         console.log("Removing", this.peek(), "from the stack")

//         // decrease stack size by 1 and (optionally) return the popped element
//         const top = this.container[this.top]
//         this.top = this.top - 1
//         return top
//     }

//     peek() {
//         /*
//         Method to return the top element of the stack 
//         */
//         if (this.is_empty()) {
//             throw "stop execution"
//         }
//         return this.container[this.top]
//     }

//     size() {
//         /*
//         Method to return the size of the stack
//         */
//         return this.top + 1
//     }

//     is_empty() {
//         return this.size() == 0
//     }

//     is_full() {
//         return this.size() == this.capacity
//     }
// }

// // SHOW EXAMPLES BELOW, then encourage students to try out different methods.
// stack = new StackList(5)

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)

// stack.pop()
// stack.pop()

// stack.push(3)

// console.log("Top element is", stack.peek())
// console.log("The stack size is", stack.size())

// stack.pop()

// if (stack.is_empty()) {
//     console.log("The stack is empty")
// } else {
//     console.log("The stack is not empty")
// }

//####################################################

/*
Stack implementation using deque class in JavaScript

Unfortunately (unlike Python) JavaScript doesn't come with a bunch of data structures
in it's standard library. You'll need to run `npm install` before being able to run this.

Source: https://github.com/datastructures-js/deque
*/

const { Deque } = require('@datastructures-js/deque')

// NB: module deque alredy has useful methods, so we don't need to re-implement them
const stack = new Deque()

stack.pushFront('1')
stack.pushFront('2')
stack.pushFront('3')
stack.pushFront('4')
stack.pushFront('5')
console.log(stack.toArray(), "Current stack");

console.log("Top element is", stack.front())  // prints the stack's top (4)

console.log("Removing", stack.popFront(), "from the stack")  // removing the top element (4)
console.log("Removing", stack.popFront(), "from the stack")  // removing the next top (3)

console.log(stack.toArray(), " stack after pop");

// // returns the total number of elements present in the stack
console.log("Stack size is", stack.size())

console.log("Removing", stack.popFront(), "from the stack")  // removing the top element (2)
console.log("Removing", stack.popFront(), "from the stack")  // removing the next top (1)
console.log("Removing", stack.popFront(), "from the stack")  // removing the next top (1)

// check if the stack is empty
if (stack.size() == 0) {
    console.log("The stack is empty")
} else {
    console.log("The stack is not empty")
}

