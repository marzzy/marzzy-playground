class Node{
  constructor(value, pointer) {
    this.value = value;
    this.next = pointer || null;
  }
}

class SinglyLiknedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    // go through the list and find the one node that point to tail
    // set it to tail and return the previous tail
    return this.forEach(currentNode => {
      if (currentNode.next === this.tail) {
        let previousTail = this.tail;
        this.tail = currentNode;
        currentNode.next = null;
        this.length--;
        return previousTail;
      } else if(currentNode.next === null) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return currentNode;
      }
    });
  }

  shift() {
    // if the length <= 1, return this.head.value || undefiend and make the list empty
    // else return head.value and make the head.next the new head && update the length
    if (this.length <= 1) {
      let previousHead = this.head || undefined;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return previousHead;
    } else {
      let previousHead = this.head;
      this.head = this.head.next;
      this.length--;
      return previousHead;
    }
  }

  unshift(value) {
    const newHeadNode = new Node(value, this.head);
    this.head = newHeadNode;
    if (!this.tail) {
      this.tail = newHeadNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    // if index >= length or < 0 , return undefined
    // else return the node at index
    if(index < 0 || index >= this.length) { 
      return undefined;
    }
    return this.forEach((currentNode, currentNodeIndex) => {
      if (currentNodeIndex === index) {
        return currentNode;
      }
    })
  }

  set(index, newValue) {
    const targetNode = this.get(index);
    if (targetNode && targetNode.value) {
      targetNode.value = newValue;
      return true;
    }
    return false;
  }

  insert(index, value) {
    // get the node at index -1
    // if there is a node then 
    //  create a new node with value and next of the node at index -1
    //  set the next of the node at index -1 to the new node
    //  this.length++
    // return this
    if(index === 0) {
      this.unshift(value);
      return true;
    } else {
      const nodeBefore = this.get(index-1);
      if (nodeBefore) {
        const newNode = new Node(value, nodeBefore.next);
        nodeBefore.next = newNode;
        this.length++;
        return true;
      }
    }
    return false;
  }

  remove(index) {
    // if index is 0(first node), shift
    // else if index is length -1(last node), pop
    // else 
    //  get the node at index -1 then calculate the node at index
    //  set the next of the node at index -1 to the node at index+1(node[index].next)
    //  this.length--
    if(index === 0) {
      return this.shift();
    } else if(index === this.length - 1) {
      return this.pop();
    } else {
      const nodeBefore = this.get(index - 1);
      if (nodeBefore) {
        const currentNode = nodeBefore.next;
        nodeBefore.next = currentNode.next;
        this.length--;
        return currentNode;
      }
    }
    return undefined;
  }

  reverse() {
    if(this.length > 1) {
      let counter = 0;
      let currentNode, currentNextNode, newNextNode;
      while(counter <= this.length - 1) {
        if (counter === 0) {
          currentNode = this.head;
          this.tail = currentNode;
          currentNextNode = currentNode.next;
          currentNode.next = null;
          newNextNode = currentNode;
          currentNode = currentNextNode;
          counter++;
        } else if (counter === this.length - 1) {
          currentNode.next = newNextNode;
          this.head = currentNode;
          counter++;
        } else {
          currentNextNode = currentNode.next;
          currentNode.next = newNextNode;
          newNextNode = currentNode;
          currentNode = currentNextNode;
          counter++;
        }
      }
    }
    return this;
  }

  forEach(fn){
    if (this.head) {
      let current = this.head;
      let courentIndex = 0;
      do{
        const res = fn(current, courentIndex);
        if (res) {
          return res;
        }
        courentIndex++;
        current = current.next;
      } while(current);
    }
  }

  print() {
    let printedList = [];
    this.forEach(currentNode => {
      let printItem = `${currentNode.value} ${currentNode.next ? '=> ' : ''}`;
      printedList.push(printItem);
    })
    console.log('\nLinkedList:  ', printedList.join(''),
      '\nHead: ', this.head ? this.head.value : 'null',
      '/ Tail: ', this.tail? this.tail.value : 'null',
      '/ Length: ', this.length,'\n'
      );
  }
}
