function eprimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const primes = [];

for (let i = 0; i <= 200; i++) {
    if (eprimo(i)) {
        primes.push(i);
    }
}

console.log("Números primos entre 0 e 200:");
console.log(primes);