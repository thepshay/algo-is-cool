// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const zipperLists = (head1, head2) => {
  // todo
  let res = head1;
  const tempRes = res;
  let curr1 = head1.next;
  let curr2 = head2;
  let i = 1;
  
  while (curr1 !== null && curr2 !== null) {
    if (i % 2 === 0) {
      res.next = curr1;
      res = res.next;
      curr1 = curr1.next;
    } else {
      res.next = curr2;
      res = res.next;
      curr2 = curr2.next;
    }
    i++;
  }
  
  if (curr1 === null) res.next = curr2;
  if (curr2 === null) res.next = curr1;
  return tempRes;
};