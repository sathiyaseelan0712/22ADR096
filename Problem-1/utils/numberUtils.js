const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPrimeNumbers = () => {
  const primes = [];
  let num = 2;
  while (primes.length < 10) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes;
};

const getFibonacciNumbers = () => {
  const fibonacci = [0, 1];
  while (fibonacci.length < 10) {
    const nextFib =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(nextFib);
  }
  return fibonacci;
};

const getEvenNumbers = () => {
  const evenNumbers = [];
  let num = 2;
  while (evenNumbers.length < 10) {
    evenNumbers.push(num);
    num += 2;
  }
  return evenNumbers;
};

const getRandomNumbers = () => {
  const randomNumbers = [];
  for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
  }
  return randomNumbers;
};

module.exports = {
  getPrimeNumbers,
  getFibonacciNumbers,
  getEvenNumbers,
  getRandomNumbers,
};
