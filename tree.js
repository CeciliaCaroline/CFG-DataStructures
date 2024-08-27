/**
 * Full Binary Tree: A binary tree where every node has either 0 or 2 children. 
 * No node has only one child
 * 
 *      1
      /   \
    2       3
   / \     / \
  4   5   6   7
           
 * Perfect Binary Tree: A binary tree where all the internal nodes have two children, 
 * and all leaves are at the same level.    
 * 
 *      1
      /   \
    2       3
   / \     /  \
 4   5    6    7
 * 
 * Complete Binary tree: A binary tree where all levels are completely 
 * filled except possibly for the last level,
 * which is filled from left to right.
 * 
 *      1 ---l1
      /   \
    2       3 ----l2
   / \     /  \
  4   5   6    7 ---l3
 /     \
8       9 ---l4
 * 
 * Incomplete Binary tree: Some levels may not be fully filled, 
 * and the last level is not filled from left to right.
 * 
 *      1
      /   \
    2       3
   / \     /  \
  4   5   6    7
      /   \
     8     9
 * 
 * 
 * Balanced Binary Tree: A binary tree where the difference between the heights of the left and right 
 * subtrees of any node is no more than 1. 
 * 
 * The height of the entire binary tree is the height of the root node. 
 * This is the longest path from the root to any leaf node.
 * If the tree has multiple levels, the height is the number of edges from the root to the farthest leaf.
 * 
 *      1
      /   \
    2       3
   / \     /  \
  4   5   6    7
 / \          /
8   9        10  
 * 
 * Full Binary tree: A full binary tree is a tree in which every node other than the leaves has two children.
 * Each node has either two child nodes or none hence no parent has just one child node
 * 
 *      1
      /   \
    2      3
          /  \
         6    7
        /  \
       8    9    
 * 
 * 
 * Binary Search Tree
 *    8
     / \
    3   10
   / \    \
  1   6    14
     / \   /
    4   7 13

 * 
 * 
 * e.g. [17,25]
 * root = 15
    *  15
    * /  \
    10    20
    / \   / \
   8  12 17  25
    
 */

/*
TASK:
To find the sum of all *leaf* nodes:

We recursively traverse through the tree.
Check if a node is a leaf node or not.

APPROACH:
- If a node is a leaf node then add its data to total.

EXAMPLE:

        1
      /   \
    2       3
   / \     /  \
  4   5    6    7
           \
            8

sum of leaf node = 4+5+8+7 = 24
*/


class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class SumLeafNodes {
    /*
    Class for finding the sum of all leaf nodes of a binary tree
    */

    constructor() {
        // initializing total to 0
        this.total = 0
    }

    sumLeafNodes(root) {
        /*
        Recursive function for finding the sum of all leaf nodes of a binary tree
        */
        if (!root) {
            return
        } else if (!root.left && !root.right) {
            // if root has no left child and no right child then add its data to total
            this.total = this.total + root.data
        } else {
            // recursively traverse through the tree
            this.sumLeafNodes(root.left)
            this.sumLeafNodes(root.right)

            // call fn for node 2 right
            // Call fn for node 1 right
        }

        return this.total
    }
}

// creating binary tree
root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right = new Node(3)
root.right.right = new Node(7)
root.right.left = new Node(6)
root.right.left.right = new Node(8)


console.log(root)

// creating object
const obj = new SumLeafNodes()
const sum = obj.sumLeafNodes(root)

console.log(`Sum of all leaf nodesin BT: ${sum}`)