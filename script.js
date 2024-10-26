// Part 1: Fizz Buzz
for(let i = 0; i <= 100; i++) {
    if(i%3 === 0 & i%5 === 0) console.log("Fizz Buzz");
    else if(i%3 === 0) console.log("Fizz");
    else if(i%5 === 0) console.log("Buzz");
    else console.log(i)
}

// Part 2: Prime Time
let n = 4;
n++

let isPrime = true;

for(let i = 2; i <= Math.sqrt(n); i++) {
    // console.log(n)
    if(n % i === 0) {
        isPrime = false;
        break;
    }
    
    if(isPrime) {
        console.log(n)
        break;
    }
}