class Node {
    constructor(value){
        this.value = value;
        this.left =  null;
        this.right = null;
    }
}

class BST {
    constructor(value){
        this.root = new Node(value);
        this.count = 1;
    }

    size(){
        return this.count;
    }

    insert(value){
        this.count++;

        let newNode = new Node(value)

        const searchTree = node => {
            if(value < node.value) {
                if(!node.left){
                    node.left = newNode;
                } else {
                    searchTree(node.left);
                }
            } else if(value > node.value) {
                if(!node.right){
                    node.right = newNode;
                } else {
                    searchTree(node.right);
                }
            }
        }

        searchTree(this.root);
    }

    min(){
        let currentNode = this.root;

        while(currentNode.left){
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }

    max(){
        let currentNode = this.root;

        while(currentNode.right){
            currentNode = currentNode.right;
        }

        return currentNode.value;
    }

    contains(value){
        let currentNode = this.root;

        while(currentNode) {
            if(value === currentNode.value){
                return true;
            }
            if(value < currentNode.value){
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return false;
    }

    dfsInOrder(){
        let result = [];

        const traverse = node => {
            node.left && traverse(node.left)

            result.push(node.value);

            node.right && traverse(node.right);
        }

        traverse(this.root);
        return result;
    }

    dfsPreOrder(){
        let result = [];

        const traverse = node => {
            result.push(node.value);
            
            node.left && traverse(node.left)

            node.right && traverse(node.right);
        }

        traverse(this.root);
        return result;
    }

    dfsPostOrder(){
        let result = [];

        const traverse = node => {            
            node.left && traverse(node.left)

            node.right && traverse(node.right);

            result.push(node.value);
        }

        traverse(this.root);
        return result;
    }

    bfs(){
        let result = [];
        let queue = [];

        queue.push(this.root);

        while(queue.length){
            let currentNode = queue.shift();

            result.push(currentNode.value);

            if(currentNode.left){
                queue.push(currentNode.left);
            }

            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }

        return result;
    }
}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log("BST Tests...");
console.log("Tree: ", bst);
console.log("Size: ", bst.size());
console.log("Min: ", bst.min());
console.log("Max: ", bst.max());
console.log("Contains True: ", bst.contains(2));
console.log("Contains False: ", bst.contains(9));
console.log("DFS In Order: ", bst.dfsInOrder());
console.log("DFS Pre Order: ", bst.dfsPreOrder());
console.log("DFS Post Order: ", bst.dfsPostOrder());
console.log("DFS Post Order: ", bst.dfsPostOrder());
console.log("BFS: ", bst.bfs());

console.log(bst.root);