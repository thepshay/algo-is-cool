// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueList = (head) => {
  // todo
  const val = head.val;
  let curr = head;
  while (curr !== null) {
    if (curr.val!==val) return false;
    curr = curr.next;
  }
  return true;
};