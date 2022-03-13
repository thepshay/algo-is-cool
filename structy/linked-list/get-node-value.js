// const getNodeValue = (head, index) => {
//   // todo
//   let curr = head;
//   let i = 0;
//   while(curr !== null) {
//     if (i === index) return curr.val;
//     i++;
//     curr = curr.next;
//   }
//   return null;
// };

const getNodeValue = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  return getNodeValue(head.next, index-1);
}