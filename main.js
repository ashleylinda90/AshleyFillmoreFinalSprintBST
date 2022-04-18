class BSTNode{
    constructor(value, left=null, right=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function BSTNodeHeight(node) {
    if (node === null){
        return 0;
    }
    return 1 + Math.max(BSTNodeHeight(node.left), BSTNodeHeight(node.right));
}

function BSTNodeBalanceFactor(node){
    if (node === null) {
        return 0;
    }
    return BSTNodeHeight(node.right) - BSTNodeHeight(node.left);
}

function BSTNodeRotateLeft(node){
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;
    return newRoot;
} 

function BSTNodeRotateRight(node){
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;
    return newRoot;
} 

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

        insert(value){
            const helper = (node) => {
                if ( node === null) {
                    return new BSTNode(value);
                }
                if(node.value === value) {
                    throw new Error("Illegal operation! Can't have an quual value!");
                } 
                else if (value < node.value) {
                    node.left = helper(node.left)
                } else { 
                    node.right = helper(node.right);
                }

                if (BSTNodeBalanceFactor(node) < -1) {
                    return BSTNodeRotateRight(node);
                } else if (BSTNodeBalanceFactor(node) > 1) {
                    return BSTNodeRotateLeft(node);
                }

                return node;
            }
            this.root = helper(this.root);
    }
}



function main() {
    let bst = new BinarySearchTree();
    bst.insert(1);
    bst.insert(2);
    bst.insert(3);
    bst.insert(4);
    bst.insert(5);
    bst.insert(6);
    bst.insert(7);
    bst.insert(8);
    bst.insert(9);
    console.log(JSON.stringify(bst, null, 2))
};
  
main();