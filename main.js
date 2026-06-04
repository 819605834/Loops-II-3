 // Write your code below
 /*
 - If the number is divisible by 3, print "Fizz"
- If the number is divisible by 5, print "Buzz"
- If the number is divisible by both 3 and 5, print "FizzBuzz"
- If the number is not divisible by 3 or 5, print the number
 */
var n = Number(prompt("Enter a number: ", 20));

 function fizzbuzz(num){
    for(let i = 1; i<num; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz");
        } else if (i%3 == 0) {
            console.log("Fizz");
        } else if (i%5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
 }

 fizzbuzz(n);
 