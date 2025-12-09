If you didn't use a while loop in the last version of this exercise, rewrite `fizzbuzz` but using a while loop. Remember you can use a counter to keep place of where you are in getting from 1 up to but not including 20. (If you did use a while previously, go ahead and try it with a for loop this time!)

If you need a refresher, here's how Fizzbuzz works:

- Write a function called fizzbuzz that loops through from 1 up to but not including a number (in this case, we'll go to 20).
- If the number is divisible by 3, print "Fizz"
- If the number is divisible by 5, print "Buzz"
- If the number is divisible by both 3 and 5, print "FizzBuzz"
- If the number is not divisible by 3 or 5, print the number

For example:

```
> fizzbuzz()


1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
```

**Hint**: A number x is divisible by a number y if the answer to x / y has a remainder of 0. 

- For example, 10 is divisible by 2 because 10 / 2 = 5 with no remainder. 
- You can check if a number is divisible by another number by checking if x % y === 0.

