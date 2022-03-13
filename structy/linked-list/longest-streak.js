// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
  // todo
  let currStreak = 0;
  let maxStreak = 0;
  let curr = head;
  let currVal = null;
  console.log(currVal)
  while (curr !== null) {

    if (curr.val === currVal) {
      currStreak += 1;
    } else {
      currVal = curr.val;
      currStreak = 1;
    }
    if (currStreak > maxStreak) maxStreak = currStreak;
    curr = curr.next;
  }
  return maxStreak;
};