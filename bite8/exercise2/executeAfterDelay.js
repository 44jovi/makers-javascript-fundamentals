const printGreetings = (name) => {
  console.log('Greetings!')
}

const executeAfterDelay = (seconds, someFunction) => {
  setTimeout(someFunction, seconds * 1000)
}

executeAfterDelay(5, printGreetings);
