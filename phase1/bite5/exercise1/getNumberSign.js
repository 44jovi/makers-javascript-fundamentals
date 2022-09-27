const getNumberSign = (n) => {
  if (n > 0) {
    return `${n} is positive`
  } else if (n === 0) {
    return `${n} is zero`
  } else {
    return `${n} is negative`
  }
}

module.exports = getNumberSign;
