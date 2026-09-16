function isEven(number) {
  if (typeof number !== 'number' || Number.isNaN(number)) {
    throw new Error('isEven expects a valid number');
  }
  return number % 2 === 0;
}

module.exports = isEven;
