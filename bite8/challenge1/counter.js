// const increment = (n) => {
//   for (let counter = 0 ; counter <= n ; counter++) {
//     setInterval(console.log(counter), 1000);
//   }
// }

// increment(5);

let counter = 0;

const increment = () => {
  console.log(counter += 1);
}

// warning - infinite loop:
setInterval(increment, 1000);
