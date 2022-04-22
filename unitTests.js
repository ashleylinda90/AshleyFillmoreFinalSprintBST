//

const { BinarySearchTree } = require('./scripts/bst');

test('test the inputs of the bst', () => {
    const newBst = new BinarySearchTree();
    newBst.insert(10);
    newBst.insert(23);
    newBst.insert(35);
    newBst.insert(42);
    newBst.insert(50);
    expect(newBst.root).not.toBe(null);
    expect(newBst.root.value).toBe(23);
    expect(newBst.root.left.value).toBe(10);
    expect(newBst.root.right.value).toBe(42);
    expect(newBst.root.right.left.value).toBe(35);
    expect(newBst.root.right.right.value).toBe(50);
    console.log(newBst, null, 2)
});


test('test to see if inputs rotate left', () => {
    const newBst = new BinarySearchTree();
    newBst.insert(18);
    newBst.insert(25);
    newBst.insert(39);
    expect(newBst.root.value).toBe(25);
    expect(newBst.root.left.value).toBe(18);
    expect(newBst.root.right.value).toBe(39);
    console.log(newBst, null, 2);
});


test('test to see if inputs rotate left and right', () => {
    const newBst = new BinarySearchTree();
    newBst.insert(12);
    newBst.insert(27);
    newBst.insert(31);
    newBst.insert(48);
    newBst.insert(54);
    expect(newBst.root.value).toBe(27);
    expect(newBst.root.left.value).toBe(12);
    expect(newBst.root.right.value).toBe(48);
    expect(newBst.root.right.left.value).toBe(31);
    expect(newBst.root.right.right.value).toBe(54);
    console.log(newBst, null, 2);
});

