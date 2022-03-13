class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeLists = (head1, head2) => {
  // todo
  let result = new Node(null)
  let resultHead = result;
  
  let curr1 = head1;
  let curr2 = head2;
  
  while (curr1!==null && curr2!==null) {
    if (curr1.val < curr2.val) {
      result.next = curr1;
      curr1 = curr1.next;
    } else {
      result.next = curr2;
      curr2 = curr2.next;
    }
    result = result.next;
  }
  
  if (curr1 === null) result.next = curr2;
  if (curr2 === null) result.next = curr1;
  return resultHead.next;
};