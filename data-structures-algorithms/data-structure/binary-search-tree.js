class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  getValue() {
    return this.value;
  };
  
  setValue(value) {
    this.value = value;
  };
  
  setRight(rightValue) {
    this.right = new Node(rightValue);
  };
  setLeft(leftValue) {
    this.left = new Node(leftValue);
  };

  getRightValue() {
    return this.right.getValue();
  }
  getLeftValue() {
    return this.left.getValue();
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  insert(newNodeValue) {
    let currentNode = this.getRoot();

    if (currentNode === null) {
      this.root = new Node(newNodeValue);
      return this;
    }

    while(true) {
      if (currentNode.getValue() > newNodeValue) {
        if(currentNode.left === null) {
          currentNode.setLeft(newNodeValue);
          return this;
        }
        currentNode = currentNode.left;
      } else if(currentNode.getValue() < newNodeValue) {
        if(currentNode.right === null) {
          currentNode.setRight(newNodeValue);
          return this;
        }
        currentNode = currentNode.right;
      } else {
        return('we already have this node value in the tree');
      }
    }
  }

  find(nodeValue) {
    let currentNode = this.getRoot();

    if (currentNode === null) {
      return false;
    }

    while(true) {
      if (currentNode.getValue() > nodeValue) {
        if(currentNode.left === null) {
          return false;
        }
        currentNode = currentNode.left;
      } else if(currentNode.getValue() < nodeValue) {
        if(currentNode.right === null) {
          return false;
        }
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
  }
}

module.exports = { Node, BinarySearchTree };
