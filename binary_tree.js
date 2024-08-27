/*
NODE CLASS IMPLEMENTATION

- INSERT method
compares the value of the node to the parent node
and decides whether to add it as a left node or right node.

NB: if the node is greater than the parent node,
it is inserted as a right node; otherwise,​ it’s inserted left.

- FIND method
while searching for a value in the tree,
we need to traverse the node from left to right and with a parent.

*/


class Node {

    constructor(data) {
        // left child
        this.left = null
        // right child
        this.right = null
        // node's value
        this.data = data
    }

    insert(data) {
        // Compare the new value with the parent node
        if (this.data) {
            if (data < this.data) {
                if (!this.left) {
                    this.left = new Node(data)
                } else {
                    this.left.insert(data)
                }
            } else if (data > this.data) {
                if (!this.right) {
                    this.right = new Node(data)
                } else {
                    this.right.insert(data)
                }
            }
        } else {
            this.data = data
        }
    }

    // findval method to compare the value with nodes
    find_value(val) {
        if (val < this.data) {
            if (!this.left) {
                return `${val} is not Found`
            }
            return this.left.find_value(val)
        } else if (val > this.data) {
            if (!this.right) {
                return `${val} is not Found`
            }
            return this.right.find_value(val)
        } else {
            return `${this.data} is found`
        }
    }

    // Print the tree
    print_tree() {
        if (this.left) {
            this.left.print_tree()
        }
        console.log(this.data)
        if (this.right) {
            this.right.print_tree()
        }
    }
}

// Use the insert method to add nodes
root = new Node(27)
root.insert(14)
root.insert(35)
root.insert(31)
root.insert(10)
root.insert(9)

/*
        27
     /       \
    14       35
   /  \     /  \
 10    9   31   42

*/

// The above code will create root node as 27, left child as 14, and right child as 35.
root.print_tree()


/*
We created tree with 9 10 14 27 31 35 nodes.
In this tree value 7 is not there so it gives the output as 7 not found.
14 is the left child root, hence found.

*/

console.log(root.find_value(7))
console.log(root.find_value(14))
