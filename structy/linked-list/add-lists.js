class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (head1, head2) => {
  // todo
  let newList = new Node(null);
  let head = newList;
  let curr1 = head1;
  let curr2 = head2;
  let carryOver = 0;
  
  while (curr1 !== null || curr2 !== null || carryOver !== 0) {
    let currVal1 = (curr1 !== null) ? curr1.val : 0;
    let currVal2 = (curr2 !== null) ? curr2.val : 0;
    let newVal = currVal1 + currVal2 + carryOver;
    carryOver = Math.floor(newVal / 10);
    newVal = newVal % 10;
    const newNode = new Node(newVal);
    newList.next = newNode;
    newList = newList.next;
    (curr1 !== null) ? curr1=curr1.next : null;
    (curr2 !== null) ? curr2=curr2.next : null;
  }

    return head.next;
};
