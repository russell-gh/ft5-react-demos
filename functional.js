/*sudo code

1. Create a function that accepts another function (higher order)
2. Run that second function
3. Store the answer
4. If the same question is asked, return the previous answer
5. If the question is new, work out the answer and return that,
   also store that answer for future use

*/

//this is a functions that does some work to simulate a real task
function square(value) {
  let answer = 0;
  for (let i = 0; i < 999999; i++) {
    answer += 1;
  }
  return answer;
}

//this is the memorisation function
function memorise(func) {
  //here we store the results of each time the func is called
  let obj = {};

  return (value) => {
    //we check if the object contains the answer
    if (obj[value]) {
      //if it does we return the previous answer
      return obj[value];
    } else {
      //if not we work out the answer
      let answer = func(value);
      //we then store the answer in the object in case we need it again
      obj[value] = answer;
      //we then return the answer
      return answer;
    }
  };
}

//created an instance of the memorise function, we send
//square as thats the function we want to memorise
let memo = memorise(square);

//the below just tests the above code by running it many times
// const start = Date.now();
// for (let i = 0; i < 9999999; i++) {
//   // memo(9);
//   console.log(square(9));
// }
// const end = Date.now();
// const difference = end - start;
// console.log(difference);
