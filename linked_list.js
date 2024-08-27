/*
NODE
The node is where data is stored in the linked list.
Each node also holds a pointer, which is a reference to the next node in the list.
*/


class Node {
  constructor(data=null, nextNode=null) {
    this.data = data
    this.nextNode = nextNode
  }

  getData() {
    return this.data
  }

  getNext() {
    return this.nextNode
  }

  setNext(newNext) {
    this.nextNode = newNext
  }
}

// TEST DATA
// n1 = new Node('a')
// n2 = new Node('b')
// n1.setNext(n2)

// console.log(n1.data)
// console.log(n1.nextNode.data)


/*
LINKED LIST

This implementation includes the following methods:
- Insert: inserts a new node into the list
- Size: returns size of list
- Search: searches list for a node containing the requested data and returns that node if found.
- Delete: searches list for a node containing the requested data and removes it from list if found.
*/


class LinkedList {
  constructor(head=null) {
    this.head = head
  }

  toString() {
    let node = this.head
    const nodes = []
    while (node != null) {
      nodes.push(str(node.data))
      node = node.nextNode
    }
    nodes.push(null)
    return nodes.join(" -> ")
  }

  insert(data) {
    const newNode = Node(data)
    newNode.setNext(this.head)
    this.head = newNode
  }

  size() {
      let current = this.head
      let count = 0
      while (current) {
        count += 1
        current = current.getNext()
      return count
      }
    }

  search(data) {
    let current = this.head
    let found = false
    while (current && found === false) {
      if (current.getData() == data) {
        found = true
      } else {
        current = current.getNext()
      }
    }
    if (current === null) {
      throw new ValueError("Data not in list")
    return current
    }
  }

  delete(data) {
    const current = this.head
    const previous = null
    const found = false
    while (current && found === false) {
      if (current.getData() == data) {
        found = true
      } else {
        previous = current
        current = current.getNext()
      }
    }
    if (current === null) {
      throw new ValueError("Data not in list")
    }
    if (previous === null) {
      this.head = current.getNext()
    } else {
      previous.setNext(current.getNext())
    }
  }
}

/*
IMPLEMENTATION
*/

const llist = new LinkedList()
console.log(llist)

const n1 = new Node('a')
llist.head = n1
console.log(llist)

const n2 = new Node('b')
const n3 = new Node('c')
n1.setNext(n2)
n2.setNext(n3)
console.log(llist)
