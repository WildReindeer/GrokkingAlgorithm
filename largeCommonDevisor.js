const mostOtherDivisor = (a, b) => {
  if (b === 0) {
    for(let i = 2; i <= a; i++) {
      if (a % i === 0) {
        return i;
      }
    }
  } else {
      return mostOtherDivisor(b, a % b);
    }
  console.log('no common devisor!');
};
