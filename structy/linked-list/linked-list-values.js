// const linkedListValues = (head) => {
//   // todo
//   let curr = head;
//   let res = [];
  
//   while (curr !== null) {
//     res.push(curr.val)
//     curr = curr.next;
//   }
//   return res;
// };

const linkedListValues = (head) => {
  let res = [];
  fillValues(head, res);
  return res;
}

const fillValues = (head, res) => {
  if (head === null) return;
  res.push(head.val)
  fillValues(head.next, res)
}