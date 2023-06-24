const calculate_primes = (num1, num2) => {
    // check which number is higher and which is lower
    let maxNum = num1 > num2 ? num1 : num2;
    let minNum = num1 < num2 ? num1 : num2;

    let prime = new Array(maxNum + 2).fill(true);
    prime[0] = false;
    prime[1] = false;

    for (let p = 2; p*p <= maxNum; p++) {
        if (prime[p] == true) {
            for (let i = p*p; i <= maxNum; i+=p) {
                prime[i] = false;
            }
        }
    }

    let results = [];
    for (let p = minNum; p <= maxNum; p++) {
        if (prime[p]) {
            results.push(p);
        }
    }
    console.log(`The prime numbers in the range between ${minNum} and ${maxNum} are: `, results);

}

// Example cases that run
// Use the command "node prime_numbers.js" in the terminal to get the result
// calculate_primes(num1, num2)
calculate_primes(56, 3);
calculate_primes(2, 36);
calculate_primes(34, 78);
calculate_primes(678, 894);