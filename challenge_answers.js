//First Challenge
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

//Second Challenge
function greetAliens(arr) {
  for(let i=0; i<arr.length; i++) {
    console.log(`Oh powerful ${arr[i]} we humans offer our unconditional surrender!`)
  }
}

//Third Challenge
function convertToBaby(arr) {
  let babyArray = []
  for(let i=0; i<arr.length; i++) {
    babyArray.push(`baby ${arr[i]}`)
  }
  return babyArray;
}

//Fourth Challenge
const numbers = [5, 3, 9, 30];

 const smallestPowerOfTwo = arr => {
       let results = [];
       // The 'outer' for loop - loops through each element in the array
       for (let i = 0; i < arr.length; i++) {
             number = arr[i];

             // The 'inner' while loop - searches for smallest power of 2 greater than the given number
             let j = 1;
             while (j < number) {
                   j = j * 2;
             }
             results.push(j);
       }
       return results
 }

 console.log(smallestPowerOfTwo(numbers))
 // Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
 /* Dear student the problem was that you used your iteration variable i as a comparison
 As you can see, you must use a different variable (I have chosen 'j' here) in order to
 compare properly */

 
