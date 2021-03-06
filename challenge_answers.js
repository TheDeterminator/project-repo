//Challenge 1
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

//Challenge 2
function greetAliens(arr) {
  for(let i=0; i<arr.length; i++) {
    console.log(`Oh powerful ${arr[i]} we humans offer our unconditional surrender!`)
  }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender!
// Oh powerful Glamyx, we humans offer our unconditional surrender!
// Oh powerful Wegord, we humans offer our unconditional surrender!
// Oh powerful SpaceKing, we humans offer our unconditional surrender!

//Challenge 3
function convertToBaby(arr) {
  let babyArray = []
  for(let i=0; i<arr.length; i++) {
    babyArray.push(`baby ${arr[i]}`)
  }
  return babyArray;
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
convertToBaby(animals);
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

//Challenge 4
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
 // Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]...not anymore! :)
 /* Dear student the problem was that you used your iteration variable i as a comparison variable
 As you can see, you must use a different variable (I have chosen 'j' here) in order to
 compare properly */

 //Challenge 5 Part 1
 function declineEverything(arr) {
  const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

arr.forEach(element => {
  return politelyDecline(element);
})
}

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

declineEverything(veggies);

//Challenge 5 Part 2
const acceptEverything = (arr) => {
  const grudginglyAccept = (veg) => {
    console.log(`Ok, I guess I will eat some ${veg}`)
  }

  arr.forEach(element => {
    return grudginglyAccept(element);
  })
}

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

acceptEverything(veggies);

//Challenge 6
const squareNums = (numbers) => {
  let squaredArray = [];
  const toSquare = num => num * num;
  squaredArray = numbers.map(number => {
    return toSquare(number);
  })
  return squaredArray;
}

const numbers = [2, 7, 9, 171, 52, 33, 14]
squareNums(numbers);

//Challenge 7
const shoutGreetings = (greetingsArray) => {
  let shoutedGreetings = [];
  const shouter = greeting => greeting.toUpperCase() + '!';

  shoutedGreetings = greetingsArray.map(greeting => {
    return shouter(greeting);
  })
  return shoutedGreetings;
}

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
shoutGreetings(greetings);
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

//<--BONUS CHALLENGES!-->

//Challenge 8
const sortYears = (yearsArray) => {
  return yearsArray.sort((smaller, larger) => {
    return larger - smaller;
  })
}

const years = [1996, 2002, 2018, 3050, 2030];
sortYears(years);
//Should print [ 3050, 2030, 2018, 2002, 1996 ]

//Challenge 9
const justCoolStuff = (arr1, arr2) => {
  let filteredArray = arr1.filter(element => {
    return arr2.includes(element);
  })
  return filteredArray;
}

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

justCoolStuff(arr1, arr2); // Should return ['this']

//Challenge 10
const isTheDinnerVegan = foodArray => {
  for (let i=0; i<foodArray.length; i++) {
    if (foodArray[i].source !== 'plant') {
      return false;
      break;
    }
  }
  return true;
}

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

isTheDinnerVegan(meal); // Should return true

//Challenge 11
const dogFactory = (name, breed, weight) => {
  return {
    name: name,
    breed: breed,
    weight: weight + 'kg'
  }
}

dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27kg }
