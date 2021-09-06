class SNode {
  value = null;
  nextNode = undefined;

  constructor(value , nextNode) {
    this.setValue(value);
    this.setNextNode(nextNode);
  }

  getValue() {
    return this.value;
  }
  getNextNode() {
    return this.nextNode;
  }
  setNextNode(nextNode) {
    this.nextNode = nextNode;
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
  increaseLengthByOne() {
    this.length++;
  }
  getLength() {
    return this.length;
  }
  push(newNode) {
    if(this.getHead()) {
      this.getTail().setNextNode(newNode);
      this.setTail(newNode);
    } else {
      this.setHead(newNode);
      this.setTail(newNode);
    }
    this.increaseLengthByOne();
  }
}

module.exports = { SNode, SinglyLinkList };