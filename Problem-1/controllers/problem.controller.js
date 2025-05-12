const {
  getPrimeNumbers,
  getFibonacciNumbers,
  getEvenNumbers,
  getRandomNumbers,
} = require("../utils/numberUtils");

let storedNumbers = [];

const windowSize = 10;

const solveProblem = async (req, res) => {
  try {
    const numberid = req.query.numberid;

    let numbers = [];
    if (numberid === "p") {
      numbers = getPrimeNumbers();
    } else if (numberid === "f") {
      numbers = getFibonacciNumbers();
    } else if (numberid === "e") {
      numbers = getEvenNumbers();
    } else if (numberid === "r") {
      numbers = getRandomNumbers();
    } else {
      return res
        .status(400)
        .json({ msg: "Invalid number ID. Use 'p', 'f', 'e', or 'r'." });
    }

    storedNumbers = [...new Set([...storedNumbers, ...numbers])];

    if (storedNumbers.length > windowSize) {
      storedNumbers = storedNumbers.slice(-windowSize);
    }

    const avg =
      storedNumbers.reduce((acc, num) => acc + num, 0) / storedNumbers.length;

    res.status(200).json({
      windowPrevState: storedNumbers.slice(0, -numbers.length),
      windowCurrState: storedNumbers,
      numbers: numbers,
      avg: avg.toFixed(2),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = solveProblem;
