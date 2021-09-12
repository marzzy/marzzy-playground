class SNode {
  value = null;
  next = null;

  constructor(value , nextNode = null) {
    this.setValue(value);
    this.setNextNode(nextNode);
  }

  getValue() {
    return this.value;
  }
  getNextNode() {
    return this.next;
  }
  setNextNode(nextNode) {
    this.next = nextNode;
  }
  setValue(value) {
    this.value = value;
  }
}

class SinglyLinkList {
  head= null;
  tail= null;
  length=0

  constructor() {}

  getHead() {
    return this.head;
  }
  setHead(head) {
    this.head = head;
  }
  getTail() {
    return this.tail;
  }
  setTail(tail) {
    this.tail = tail;
  }
  setLength(length) {
    this.length = length;
  }
  increaseLength(additionalValue = 1) {
    this.length = this.length + additionalValue;
  }
  getLength() {
    return this.length;
  }
  push(newNodeValue) {
    const newNode = new SNode(newNodeValue)
    if(this.getHead()) {
      this.getTail().setNextNode(newNode);
      this.setTail(newNode);
    } else {
      this.setHead(newNode);
      this.setTail(newNode);
    }
    this.increaseLength();

    return this;
  }

  pop() {
    let theNewTail = this.getHead();
    let currentTail = this.getTail();

    for(let i = 1; i < this.length-1; i++) {
      theNewTail = theNewTail.getNextNode();
    }
    
    if(this.getLength() <= 1) {
      this.setHead(null);
      this.setTail(null);
      this.setLength(0);
    } else {
      theNewTail.setNextNode(null);
      this.setTail(theNewTail);
      this.increaseLength(-1);
    }
    return currentTail;
  }

  shift() {
    let currentHead = this.getHead();
    
    if(this.getLength() <= 1) {
      this.setHead(null);
      this.setTail(null);
      this.setLength(0);
    } else {
      let newHead = this.getHead().getNextNode();
      this.increaseLength(-1);
      this.setHead(newHead);
    }
    return currentHead;
  }

  unshift(newNodeValue) {
    const newNode = new SNode(newNodeValue, this.getHead());
    if(!this.getHead()) {
      this.setTail(newNode);
    }
    this.setHead(newNode);
    this.increaseLength();

    return this;
  }

  get(index) {
    if(index <= 0 || index > this.getLength()) {
      return null;
    }
    if(index === this.getLength()) {
      return this.getTail();
    }
    let currentNode = this.getHead();
    let counter = 1;
    while(counter < index) {
      currentNode = currentNode.getNextNode();
      counter++;
    }
    return currentNode;
  }

  set(nodeIndex, newValue) {
    let targetNode = this.get(nodeIndex);
    if (targetNode) {
      targetNode.setValue(newValue);
      return true;
    }
    return false;
  }

  insert(nodeIndex, value) {
    if(nodeIndex < 0 || nodeIndex > this.getLength()) {
      return false;
    }
    if (nodeIndex === 0) {
      return Boolean(this.unshift(value));
    }
    if( nodeIndex === this.getLength()) {
      return Boolean(this.push(value));
    }
    let nodeBeforeThisNode = this.get(nodeIndex-1);
    const newNode = new SNode(value, nodeBeforeThisNode.getNextNode());
    nodeBeforeThisNode.setNextNode(newNode);
    this.increaseLength();
    return true;
  }
}

module.exports = { SNode, SinglyLinkList };