class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert a value
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    // find a value
    // return true if value contains otherwise false
    contains(value) {
        if (this.root === null) return false;
        var current = this.root;
        var isFound = false;
        while (current && !isFound) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                isFound = true;
            }
        }
        if (!isFound) return false;
        return isFound;
    }
}

module.exports = { BinarySearchTree };