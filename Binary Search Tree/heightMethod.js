// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };

this.getHeight = function(root) {

    // Add your code here
    let rightCount = 0;
    let leftCount = 0;
    
    function searchRight(node){
        let currentNode;

        if(node.right){
            rightCount++;
            currentNode = node.right;
            searchRight(currentNode);
        } else if(node.left){
            rightCount++;
            currentNode = node.left;
            searchRight(currentNode);
        }
    }

    function searchLeft(node){
        let currentNode;
        
        if(node.left){
            leftCount++;
            currentNode = node.left;
            searchLeft(currentNode);
        } else if(node.right){
            leftCount++;
            currentNode = node.right;
            searchLeft(currentNode);
        }
    }
    
    searchRight(root);
    searchLeft(root);
    
    if(leftCount > rightCount) {
        return leftCount;
    } else {
        return rightCount;
    }
}

}