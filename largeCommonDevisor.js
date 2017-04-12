const mostOtherDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return mostOtherDivisor(b, a % b);
};
