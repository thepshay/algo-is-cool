// const sumList = (head) => {
//   // todo
//   let sum = 0;
//   let curr = head;
//   while (curr !== null) {
//     sum += curr.val;
//     curr = curr.next;
//   }
//   return sum;
// };

const sumList = (head) => {
  return findSum(head, 0);
}

const findSum = (head, sum) => {
  if (head === null) return sum;
  sum += head.val;
  return findSum(head.next, sum);
}
