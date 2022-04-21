const { BinarySearchTree } = require('./scripts/bst');

test('test the inputs of the bst', () => {
    const newBst = new BinarySearchTree();
    newBst.insert(1);
    newBst.insert(2);
    newBst.insert(3);
    newBst.insert(4);
    newBst.insert(5);
    expect(newBst.root).not.toBe(null);
    expect(newBst.root.value).toBe(2);
    expect(newBst.root.left.value).toBe(1);
    expect(newBst.root.right.value).toBe(4);
    expect(newBst.root.right.left.value).toBe(3);
    expect(newBst.root.right.right.value).toBe(5);
    console.log(newBst, null, 2)
});



