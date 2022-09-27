const sayHello = (name) => {
  console.log(`Hello ${name}`);
}

module.exports = sayHello;
// then we can assign the constant in this file 
// in a new constant in the node REPL and call it
// i.e. `const newHello = require('./hello');`
