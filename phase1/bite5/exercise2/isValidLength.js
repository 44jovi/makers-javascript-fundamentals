const isValidLength = (phoneNumber) => {
  const validLength = 10;
  if (phoneNumber.length == validLength) {
    return true;
  } else {
    return  false;
  }
}

console.log(isValidLength('00'))
console.log(isValidLength('0011223344'))
