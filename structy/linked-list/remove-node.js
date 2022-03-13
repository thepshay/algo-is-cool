// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const removeNode = (head, targetVal) => {
//   // todo
//   if (head.val === targetVal) return head.next;
//   let prev = head;
//   let curr = head.next;
//   while (curr !== null) {
//     if (curr.val === targetVal) {
//       prev.next = curr.next;
//       return head;
//     }
//     prev = prev.next;
//     curr = curr.next;
//   }
// };

const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next;
  head.next = removeNode(head.next, targetVal);
  return head;
}