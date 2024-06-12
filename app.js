/*/console.lof(fetch("https://jsonplaceholder.typicode.com/users/1"))//

//fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
console.log(response)().then(data => {//

  })
})*/

//Medium level lesson // 
//Given two values return the first one if it is falsy, otherwise return the secon one. //

/**function filterOutFalsy(value1, value2){
 return !value1 ? value1 : value2
}

console.log(filterOutFalsy(0,500))*/

//Return the lenght of any given array//

/*let numbers = ['1', '2', '3'];

let listOfNumbers = numbers.length;

console.log(listOfNumbers)*/

/*function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1,2,3,4]));*/

//Get the  last element in an array. //
/*function arrLength(arr) {
  return arr[arr.length-1];
}

console.log(arrLength([3,2,6,2])); */


/*function convertToZeros(arr) {
  for (let i= 0; i < arr.length; ++i) {
    arr[i] = 0
  }
  return arr;
}
console.log(convertToZeros([5,100,0]));*/

/*function filterOutFalsy(arr) {
  let falsyValues = [] 
  for (let i= 0; i < arr.length; ++i) {
    arr[i] = falsy
  }
  return arr;
}
console.log(filterOutFalsy(["", [], undefined, "0"]));*/

/*function convertToBoolean(arr) {
  return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500,0, "David", "", []]));*/

/*function getMax(arr) {
  let max = arr[0];
  for (let i=0; i < arr.length; ++i){
    if (arr[i] > max) {
      max = arr[i];
    }
  }
    return max;
}
console.log(getMax([12, 10, -20,400]));*/

/*function reverseString (str){
  return str.split('').reverse().join('');;
}
console.log(reverseString('Betsy is cool'));*/

/*function removeApples (arr){
  return arr.filter(elem => elem !== 'apple')
}
console.log(removeApples(['tomatoes', 'orange', 'banana', 'apple']));*/

/*function filterOutFalsy (arr){
  return arr.filter(elem => !!elem === true)
}

console.log.filterOutFalsy(["", 0, null, undefined, "0"])*/

/*function showRating (rating){
  //initialise an empty string
  let ratings = "";
  //loop through the rounded down rating 
  for (let i=0; i < Math.floor(rating); ++i){
  //add a star for every iteration
  ratings += "*";
  //if its not the last iteration add a space
  if (i !== Math.floor(rating) - 1) {
    ratings += "";
  }
} 
  //if a number is not an integer
  if (!Number.isInteger(rating)) {
     //add a full stop
     ratings += " .";
  }
  //return it 
  return ratings;
}

console.log(showRating(3.5));*/

/*function sortLowToHigh (arr) {
  return arr.sort((a, b)  => a - b);
}
console.log(sortLowToHigh([20,40,10,30,50,100]))*/

async function postsByUser(userId) {
const promise = await fetch ("https://jsonplaceholder.typicode.com/posts");

const result = await promise.json()

const posts = result.filter(element => element.userId === userId)

console.log(posts)
}

postsByUser(4);















 


