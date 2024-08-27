// //##############################################

// QUEUE

/*
Queue Implementation using a List
*/


class MyQueue {

    constructor(size) {
        this.q = Array(size)  // list to store queue elements
        this.capacity = size  // maximum capacity of the queue
        this.front = 0  // front points to the front element in the queue
        this.rear = -1  // rear points to the last element in the queue
        this.count = 0  // current size of the queue
    }

    pop() {
        if (this.is_empty()) {
            console.log("Queue Underflow!! Terminating process.")
            throw "stop execution"
        }

        console.log("Removing element…", this.q[this.front])

        this.front = (this.front + 1) % this.capacity
        this.count = this.count - 1
    }

    // [1,2,3,4,5]
    append(value) {
        if (this.is_full()) {
            console.log("Queue is full! Terminating process.")
            throw "stop execution"
        }

        console.log("Inserting element…", value)

        this.rear = (this.rear + 1) % this.capacity
        console.log(this.rear, "Rear position")
        this.q[this.rear] = value
        this.count = this.count + 1
    }

    peek() {
        if (this.is_empty()) {
            console.log("Queue is empty!! Terminating process.")
            throw "stop execution"
        }

        return this.q[this.front]
    }

    size() {
        return this.count
    }

    is_empty() {
        return this.size() == 0
    }

    is_full() {
        return this.size() == this.capacity
    }
}

//[-,-,-,-,-]
// front = 0
// rear = -1
// count = 0

// append 1
// [1, -, -, -, -]
// rear = 0
// count 1

// append 2
// [1,2,-,-,-]
// rear = 1
//count 2

// append 3
// [1,2,3,-,-]
//rear=2
//count = 3

//pop
// [-,2,3,-,-]
// front = 1
//count =2

//pop
// [-,-,3,-,-]
//front=2
//count =1

//append 4
//[-,-,3,4,-]
//rear=3
//count =2

//append 5\
//[-,-,3,4,5]
//rear=4
//count =3

//append 6
//[6,-,3,4,5]
//rear=0
//count =3



// SHOW EXAMPLES BELOW, then encourage students to try out different methods.
// q = new MyQueue(5)

// q.append(1)
// q.append(2)
// q.append(3)

// console.log("The queue size is", q.size())
// console.log("The front element is", q.peek())
// q.pop()
// console.log("The front element is", q.peek())

// q.pop()
// q.pop()

// if (q.is_empty()) {
//   console.log("The queue is empty")
// } else {
//   console.log("The queue is not empty")
// }

/*
Queue implementation using deque class in Python
*/

// const { Deque } = require('@datastructures-js/deque')

// // NB: module deque alredy has useful methods, so we don't need to re-implement them
// queue = new Deque()

// queue.pushBack(1)
// queue.pushBack(2)
// queue.pushBack(3)
// queue.pushBack(4)

// console.log("The front element is", queue.front())  // 1

// queue.popFront()  // removing the front element (1)
// queue.popFront()  // removing the front element (2)

// // Print front item of the queue
// console.log("The front element is", queue.front())  // 3

// console.log("The queue size is", queue.size())  // 2

// // check whether the queue is empty
// if (queue.size() == 0) {
//     console.log("The queue is empty")
// } else {
//     console.log("The queue is not empty")
// }