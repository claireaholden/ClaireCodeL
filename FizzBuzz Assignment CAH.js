let fizzBuzz = function (n) { //creating the function fizzBuzz
  
    for (i = 1; i <= n; i++)
        //normal brackets are the condition of the for loop
        //1) i is the incrementer which counts how many times we have been through the loop
        //usually you start from 0 but this assignment had a condition where it needed to start from 1, so let i=1

        //2) next part after the semi-colon is the condition it takes to break the for loop

        //3) third part of the for loop is how much i will change each time
        //i++ is shorthand for i=i+1

        {//what you are asking the for loop to do goes in curly brackets

        if (i % 15 === 0) {console.log("FizzBuzz")} 
        //using the if function to set a condition
        //percentages is like dividing but it only gives the remainder e.g. 15/3 would be 0
        //put curly brackets {} around what you want the function to do if the conditions are met
        // three equals signs checks if two values are equal, both in value and type. 'strict equality operator'
        else if (i % 3 === 0) {console.log("Fizz")} //else if specifies a new condition to test, if the first condition is false
        else if (i % 5 === 0) {console.log("Buzz")}
        // else if the same condition is false
        else {console.log(i)} //prints current row
    } 
   
}; 

fizzBuzz(15) //now this calls the function and asks it to run up to the number 15
