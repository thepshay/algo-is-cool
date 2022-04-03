// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


const middleValue = (head) => {
  // todo 
  // const array = [];
  // while (head !== null) {
  //   array.push(head.val);
  //   head = head.next;
  // }
  // const mid = Math.floor(array.length / 2);
  // return array[mid];
  
//   let midNode = head;
//   let tracker = 0;
//   let mid = head.val;
//   let last = head.val;
  
//   while (head !== null) {
//     if (tracker % 2 === 1) {
//       midNode = midNode.next;
//       mid = midNode.val;
//     }
//     last = head.val;
//     head = head.next;
//     tracker++;
//   }
  
//   return mid;
  
  let fast = head;
  let slow = head;
  
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    
  }
  
  return slow.val
  
};
