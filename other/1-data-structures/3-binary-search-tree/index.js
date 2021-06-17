const { BinarySearchTree } = require('./BinarySearchTree');


// Big O of Binary Search tree
// insertion - O(log n)
// searching - O(log n)

//        10
//    5         13
//2     7   11     16


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.insert(13);
tree.insert(11);
tree.insert(16);
tree.insert(10);
// tree.insert(99);
