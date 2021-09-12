
const { SNode, SinglyLinkList } = require("./singly-link-list");

test("test create node without next node value", () => {
    let a = new SNode(32);

    expect(a.getValue()).toBe(32);
    expect(a.getNextNode()).toBe(null);
});

test("test create full option node", () => {
    let a = new SNode(32);
    let b = new SNode(17, a);

    expect(b.getValue()).toBe(17);
    expect(b.getNextNode()).toBe(a);
});

test("test create singlyLinkList", () => {
    let myList = new SinglyLinkList();

    expect(myList.getHead()).toBe(null);
    expect(myList.getTail()).toBe(null);
});

test("push new node to empty singlyLinkList", () => {
    let a = 32;
    let myList = new SinglyLinkList();

    expect(myList.getHead()).toBe(null);

    myList.push(a)

    expect(myList.getHead().getValue()).toBe(a);
});

test("push 3 new nodes to a singlyLinkList", () => {
    let d = 32;
    let c = 12;
    let b = 13;
    let a = 14;
    let myList = new SinglyLinkList();

    myList.push(a);
    myList.push(b);
    myList.push(c);

    expect(myList.getHead().getNextNode().getNextNode().getNextNode()).toBe(null);
    expect(myList.getLength()).toBe(3);

    myList.push(d);

    expect(myList.getHead().getValue()).toBe(a);
    expect(myList.getHead().getNextNode().getValue()).toBe(b);
    expect(myList.getHead().getNextNode().getNextNode().getValue()).toBe(c);
    expect(myList.getHead().getNextNode().getNextNode().getNextNode().getValue()).toBe(d);
    expect(myList.getHead().getNextNode().getNextNode().getNextNode().getNextNode()).toBe(null);
    expect(myList.getLength()).toBe(4);
});

test("pop from a singlyLinkList", () => {
    let c = 12;
    let b = 13;
    let a = 14;
    let myList = new SinglyLinkList();

    myList.push(a);
    myList.push(b);
    myList.push(c);
    let returnedNode = myList.pop();

    expect(myList.getLength()).toBe(2);
    expect(myList.getTail().getValue()).toBe(b);
    expect(myList.getTail().getNextNode()).toBe(null);
    expect(returnedNode.getValue()).toBe(c);
    expect(returnedNode.getNextNode()).toBe(null);

    returnedNode = myList.pop();

    expect(myList.getLength()).toBe(1);
    expect(myList.getHead().getValue()).toBe(a);
    expect(myList.getTail().getValue()).toBe(a);
    expect(myList.getTail().getNextNode()).toBe(null);
    expect(returnedNode.getValue()).toBe(b);
    expect(returnedNode.getNextNode()).toBe(null);

    returnedNode = myList.pop();

    expect(myList.getLength()).toBe(0);
    expect(myList.getHead()).toBe(null);
    expect(myList.getTail()).toBe(null);
    expect(returnedNode.getNextNode()).toBe(null);
    expect(returnedNode.getValue()).toBe(a);

    returnedNode = myList.pop();

    expect(myList.getLength()).toBe(0);
    expect(myList.getHead()).toBe(null);
    expect(myList.getTail()).toBe(null);
    expect(returnedNode).toBe(null);
});

test("shift from a singlyLinkList", () => {
    let c = 12;
    let b = 13;
    let a = 14;
    let myList = new SinglyLinkList();

    myList.push(a);
    myList.push(b);
    myList.push(c);
    let returnedNode = myList.shift();

    expect(myList.getLength()).toBe(2);
    expect(myList.getHead().getValue()).toBe(b);
    expect(returnedNode.getValue()).toBe(a);

    returnedNode = myList.shift();

    expect(myList.getLength()).toBe(1);
    expect(myList.getHead().getValue()).toBe(c);
    expect(returnedNode.getValue()).toBe(b);

    returnedNode = myList.shift();

    expect(myList.getLength()).toBe(0);
    expect(myList.getHead()).toBe(null);
    expect(myList.getTail()).toBe(null);
    expect(returnedNode.getValue()).toBe(c);

    returnedNode = myList.shift();
    
    expect(myList.getLength()).toBe(0);
    expect(myList.getHead()).toBe(null);
    expect(myList.getTail()).toBe(null);
    expect(returnedNode).toBe(null);
});

test("unshift to a singlyLinkList", () => {
    let c = 12;
    let b = 13;
    let a = 14;
    let myList = new SinglyLinkList();

    myList.unshift(c);

    expect(myList.getLength()).toBe(1);
    expect(myList.getHead().getValue()).toBe(c);
    expect(myList.getTail().getValue()).toBe(c);

    myList.unshift(b);

    expect(myList.getLength()).toBe(2);
    expect(myList.getHead().getValue()).toBe(b);
    expect(myList.getHead().getNextNode().getValue()).toBe(c);
    expect(myList.getTail().getValue()).toBe(c);

    myList.unshift(a);

    expect(myList.getLength()).toBe(3);
    expect(myList.getHead().getValue()).toBe(a);
    expect(myList.getHead().getNextNode().getValue()).toBe(b);
    expect(myList.getHead().getNextNode().getNextNode().getValue()).toBe(c);
    expect(myList.getTail().getValue()).toBe(c);
});

test("get a node in singlyLinkList", () => {
    let c = 12;
    let b = 13;
    let a = 14;
    let myList = new SinglyLinkList();
    let retunedNode = myList.get(1);

    expect(retunedNode).toBe(null);

    myList.push(a);
    myList.push(b);
    myList.push(c);
    retunedNode = myList.get(1);

    expect(retunedNode.getValue()).toBe(a);
    expect(retunedNode.getNextNode().getValue()).toBe(b);

    retunedNode = myList.get(2);

    expect(retunedNode.getValue()).toBe(b);
    expect(retunedNode.getNextNode().getValue()).toBe(c);

    retunedNode = myList.get(3);

    expect(retunedNode.getValue()).toBe(c);
    expect(retunedNode.getNextNode()).toBe(null);

    retunedNode = myList.get(-3);

    expect(retunedNode).toBe(null);

    retunedNode = myList.get(40);

    expect(retunedNode).toBe(null);
    
    retunedNode = myList.get(0);

    expect(retunedNode).toBe(null);

});

test("set a node value in singlyLinkList", () => {
    let c = 12;
    let b = 13;
    let a = 14;
    let myList = new SinglyLinkList();
    let retunedValue = myList.set(1, 70);

    expect(retunedValue).toBe(false);
    
    retunedValue = myList.set(-1, 70);

    expect(retunedValue).toBe(false);

    myList.push(a);
    myList.push(b);
    myList.push(c);
    retunedValue = myList.set(1, 71);

    expect(retunedValue).toBe(true);
    expect(myList.get(1).getValue()).toBe(71);

    retunedValue = myList.set(100, 2);

    expect(retunedValue).toBe(false);
});

test("insert a node in singlyLinkList", () => {
    let c = 12;
    let b = 13;
    let a = 14;
    let myList = new SinglyLinkList();
    myList.push(a);
    myList.push(b);
    myList.push(c);

    let retunedValue = myList.insert(100, 70);

    expect(retunedValue).toBe(false);
    
    retunedValue = myList.insert(-1, 71);

    expect(retunedValue).toBe(false);
    
    let beforeInsert1ndNode = myList.get(1);
    let beforeInsert2ndNode = beforeInsert1ndNode.getNextNode();
    retunedValue = myList.insert(2, 50);

    expect(retunedValue).toBe(true);
    expect(myList.get(1)).toBe(beforeInsert1ndNode);
    expect(myList.get(1).getNextNode().getValue()).toBe(50);
    expect(myList.get(2).getNextNode()).toBe(beforeInsert2ndNode);

    retunedValue = myList.insert(0, 71);

    expect(retunedValue).toBe(true);
    expect(myList.getHead().getValue()).toBe(71);

    retunedValue = myList.insert(myList.getLength(), 72);

    expect(retunedValue).toBe(true);
    expect(myList.getTail().getValue()).toBe(72);
});