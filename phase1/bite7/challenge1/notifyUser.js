const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (number) => {
  return `Text sent to: ${number}`
}

const notify = (emailOrNumber, commMethod) => {
  return commMethod(emailOrNumber);
}

console.log(notify('wendy@wendy.com', notifyByEmail));
// => Email sent to: wendy@wendy.com
console.log(notify('12345678901', notifyByText));
// => Text sent to: 12345678901
