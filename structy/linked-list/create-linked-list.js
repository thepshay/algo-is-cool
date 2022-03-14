class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const createLinkedList = (values) => {
//   // todo
//   let newNode = new Node(null);
//   const head = newNode;
//   for (let ele of values) {
//     const nextNode = new Node(ele);
//     newNode.next = nextNode;
//     newNode = newNode.next;
//   }
//   return head.next;
// };


const createLinkedList = (values, i=0) => {
  if (i === values.length) return null;
  const head = new Node(values[i]);
  head.next = createLinkedList(values, i+1);
  return head;
}