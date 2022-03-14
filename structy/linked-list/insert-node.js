class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  // todo
  const newNode = new Node(value);
  
  if (index === 0) {
    newNode.next = head;
    return newNode
  }
  
  let curr = head;
  let count = 1;
  while ( count < index ) {
    curr = curr.next;
    count += 1;
  }
  const next = curr.next;
  curr.next = newNode;
  newNode.next = next;
  
  return head;
};