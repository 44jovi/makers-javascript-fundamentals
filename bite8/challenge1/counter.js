let counter = 0;

const increment = () => {
  console.log(counter += 1);
}

// warning - infinite loop:
setInterval(increment, 1000);
