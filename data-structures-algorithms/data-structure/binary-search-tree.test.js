const { Node, BinarySearchTree } = require("./binary-search-tree");

test("create a node", () => {
  let a = new Node(32);

  expect(a.getValue()).toBe(32);
});

test("update a node value", () => {
  let a = new Node(32);
  a.setValue(64);

  expect(a.getValue()).toBe(64);
});

test("create a binary search tree", () => {
  let bst = new BinarySearchTree();

  expect(bst.getRoot()).toBe(null);
})

test("insert a new node to bst (the root)", () => {
  let bst = new BinarySearchTree();
  bst.insert(10);

  expect(bst.getRoot().getValue()).toBe(10);
})

test("insert a new node to bst (to the right and left side of root)", () => {
  let bst = new BinarySearchTree();
  bst.insert(12);
  bst.insert(10);
  bst.insert(13);

  expect(bst.getRoot().getLeftValue()).toBe(10);
  expect(bst.getRoot().getRightValue()).toBe(13);
})

test("insert nodes to bst (to the middle)", () => {
  let bst = new BinarySearchTree();
  bst.insert(12);
  bst.insert(10);
  bst.insert(13);
  bst.insert(15);
  bst.insert(9);

  expect(bst.getRoot().right.getRightValue()).toBe(15);
  expect(bst.getRoot().left.getLeftValue()).toBe(9);
})

test("insert repititive node to bst", () => {
  let bst = new BinarySearchTree();
  bst.insert(12);
  bst.insert(10);

  expect(bst.insert(10)).toBe('we already have this node value in the tree');
})

test("find nodes on bst", () => {
  let bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(15);
  bst.insert(8);
  bst.insert(0);

  expect(bst.find(10)).toBe(true);
  expect(bst.find(15)).toBe(true);
  expect(bst.find(8)).toBe(true);
  expect(bst.find(0)).toBe(true);
  expect(bst.find(11)).toBe(false);
  expect(bst.find(16)).toBe(false);
  expect(bst.find(9)).toBe(false);
  expect(bst.find(7)).toBe(false);
})

test("find a node on empty bst", () => {
  let bst = new BinarySearchTree();

  expect(bst.find(10)).toBe(false);
})