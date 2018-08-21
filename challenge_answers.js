function reverseArray(arr) {
  let reversedArray = [];
  for (let i=arr.length-1; i>=0; i--) {
  reversedArray.push(arr[i]);
}
return reversedArray;
 }

const sentence = ['sense.','make', 'all', 'will', 'This'];
reverseArray(sentence);
// Should return ['This', 'will', 'all', 'make', 'sense.'];
