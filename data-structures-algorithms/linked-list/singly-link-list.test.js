
const { SNode, SinglyLinkList } = require("./singly-link-list");

test("test create node without next node value", () => {
    let a = new SNode(32);

    expect(a.getValue()).toBe(32);
    expect(a.getNextNode()).toBe(undefined);
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
    let a = new SNode(32);
    let myList = new SinglyLinkList();

    expect(myList.getHead()).toBe(null);

    myList.push(a)

    expect(myList.getHead()).toBe(a);
});

test("push 3 new nodes to a singlyLinkList", () => {
    let d = new SNode(32);
    let c = new SNode(12);
    let b = new SNode(13);
    let a = new SNode(14);
    let myList = new SinglyLinkList();

    myList.push(a);
    myList.push(b);
    myList.push(c);

    expect(myList.getHead().getNextNode().getNextNode().getNextNode()).toBe(undefined);
    expect(myList.getLength()).toBe(3);

    myList.push(d);

    expect(myList.getHead()).toBe(a);
    expect(myList.getHead().getNextNode()).toBe(b);
    expect(myList.getHead().getNextNode().getNextNode()).toBe(c);
    expect(myList.getHead().getNextNode().getNextNode().getNextNode()).toBe(d);
    expect(myList.getHead().getNextNode().getNextNode().getNextNode().getNextNode()).toBe(undefined);
    expect(myList.getLength()).toBe(4);
});